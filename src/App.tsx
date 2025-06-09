import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget/ChatWidget';
import Home from './pages/Home';
import Games from './pages/Games';
import Game from './pages/Game';
import Characters from './pages/Characters';
import About from './pages/About';
import Contact from './pages/Contact';
import Forums from './pages/Forums';
import Discord from './pages/Discord';
import Events from './pages/Events';
import Support from './pages/Support';
import LatestReleases from './pages/LatestReleases';
import PopularGames from './pages/PopularGames';
import GameUpdates from './pages/GameUpdates';
import Careers from './pages/Careers';
import PressKit from './pages/PressKit';
import Legal from './pages/Legal';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Scoreboard from './pages/Scoreboard';
import FAQ from './pages/FAQ';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/game" element={<Game />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/events" element={<Events />} />
            <Route path="/support" element={<Support />} />
            <Route path="/latest-releases" element={<LatestReleases />} />
            <Route path="/popular-games" element={<PopularGames />} />
            <Route path="/game-updates" element={<GameUpdates />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press-kit" element={<PressKit />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </AuthProvider>
  );
}

export default App;
