from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr
from datetime import datetime, timedelta
from typing import Optional
from jose import JWTError, jwt
import psycopg2

# Configuración
SECRET_KEY = "contraseña123"  # Usa un secreto fuerte en producción
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

# Conexión a PostgreSQL
conn = psycopg2.connect(
    dbname="Reto",
    user="aleman0",
    password="1234",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()

# App
app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cambia por ['http://localhost:5173'] si usas Vite
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelos
class SignupData(BaseModel):
    email: EmailStr
    password: str
    rol: str = "cliente"  # Valor por defecto cliente

class Token(BaseModel):
    access_token: str
    token_type: str

# Utilidad JWT
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Endpoints
@app.get("/")
def root():
    return {"message": "API funcionando correctamente"}

@app.post("/signup")
def signup(data: SignupData):
    try:
        now = datetime.now()
        cursor.execute(
            "INSERT INTO usuarios (correo, contrasena, rol, fecha_registro) VALUES (%s, %s, %s, %s)",
            (data.email, data.password, data.rol, now)
        )
        conn.commit()
        return {"message": "Cuenta creada exitosamente"}
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/token", response_model=Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    cursor.execute(
        "SELECT id, correo, contrasena, rol FROM usuarios WHERE correo = %s AND contrasena = %s",
        (form_data.username, form_data.password)
    )
    user = cursor.fetchone()
    if not user:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")

    token_data = {
        "sub": user[1],  # correo
        "role": user[3]  # rol
    }

    access_token = create_access_token(
        data=token_data,
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    return {"access_token": access_token, "token_type": "bearer"}
