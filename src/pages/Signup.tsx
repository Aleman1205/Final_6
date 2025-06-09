import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ← agrega useNavigate
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Signup: React.FC = () => {
  const navigate = useNavigate(); // ← inicializa navigate

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rol: 'cliente',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      await setDoc(doc(db, 'usuarios', user.uid), {
        email: formData.email,
        rol: formData.rol,
        uid: user.uid,
      });

      setSuccess('Cuenta creada correctamente');
      setTimeout(() => navigate('/'), 1000); // ← redirige al home después de 1s
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('El correo ya está registrado. ¿Quieres iniciar sesión?');
      } else {
        setError(err.message);
      }
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <Container className="flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow-xl rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Crear Cuenta
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="Correo"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="Contraseña"
                />
              </div>

              <div>
                <label htmlFor="rol" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Rol
                </label>
                <select
                  id="rol"
                  name="rol"
                  value={formData.rol}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                >
                  <option value="cliente">Cliente</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>

              <Button type="submit" className="w-full">
                Crear
              </Button>

              {/* Mostrar solo un mensaje a la vez */}
              {error ? (
                <p className="text-red-500 text-center">{error}</p>
              ) : success ? (
                <p className="text-green-500 text-center">{success}</p>
              ) : null}

              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Ya tienes cuenta?{' '}
                <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
