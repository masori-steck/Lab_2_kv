import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Reviews from './components/Reviews';        
import ContactForm from './components/ContactForm'; 

function App() {
  // Стан для теми
  const [theme, setTheme] = useState('dark');

  // Логіка визначення теми за часом
  useEffect(() => {
    const currentHour = new Date().getHours();
    // Денна тема: від 07:00 до 21:00
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Динамічні класи для фону всього екрана
  const appBackground = theme === 'dark' 
    ? 'bg-zinc-950 text-zinc-300' 
    : 'bg-zinc-100 text-zinc-900';

  // Динамічні класи для центрального вікна резюме
  const wrapperBackground = theme === 'dark'
    ? 'bg-zinc-900 border-zinc-800'
    : 'bg-white border-zinc-300';

  return (
    <div className={`min-h-screen font-mono py-10 px-4 transition-colors duration-500 ${appBackground}`}>
      
      {/* Кнопка перемикання теми*/}
      <div className="max-w-5xl mx-auto flex justify-end mb-4">
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`cursor-pointer px-4 py-2 rounded-lg font-bold transition-all duration-300 border ${
            theme === 'dark' 
              ? 'bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-500 text-zinc-300' 
              : 'bg-white border-zinc-300 hover:bg-zinc-200 text-zinc-800'
          }`}
        >
          {theme === 'dark' ? 'Світлий режим' : 'Темний режим'}
        </button>
      </div>

      {/*головне вікно резюме */}
      <div className={`max-w-5xl mx-auto shadow-2xl rounded-2xl border p-8 transition-colors duration-500 ${wrapperBackground}`}>
          <Header theme={theme} />
          <main className="space-y-8">
          <Main theme={theme} />
          <Reviews theme={theme}/> 
          </main>
        
        <Footer />
      </div>

      {/* Модальне вікно (відображається поверх усього) */}
      <ContactForm theme={theme}/>
    </div>
  );
}

export default App;