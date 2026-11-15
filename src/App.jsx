import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  // Автоперемикання при завантаженні: день 07:00-21:00, інакше ніч
  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
  }, []);

  // Застосування класу dark до <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Ручне перемикання
  const toggleTheme = () =>
    setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 dark:text-slate-100 font-sans flex flex-col transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="flex-grow max-w-5xl mx-auto p-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Experience />
        <Education />
        <Reviews />
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;