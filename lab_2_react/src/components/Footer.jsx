import { useState, useEffect } from 'react';

function Footer() {
   //1. Створюю стан для збереження інформації про систему
  const [sysInfo, setSysInfo] = useState('');

  // 2. Використовую useEffect, щоб зчитати дані при завантаженні сторінки
  useEffect(() => {
    const platform = navigator.platform;
    const browser = navigator.userAgent.split(' ')[0];
    const info = `${platform} | ${browser}`;
    
    // Зберігаю в LocalStorage
    localStorage.setItem('systemInfo', info);
    
    // Отримую з LocalStorage і записую в стан
    setSysInfo(localStorage.getItem('systemInfo'));
  }, []);

  return (
    // Додав pb-6 (padding-bottom), щоб текст не прилипав до самого низу екрана
    <footer className="mt-12 pt-8 border-t border-zinc-800 text-center pb-6">
      
      {/* Блок з контактами */}
      <div className="flex justify-center gap-8 mb-6">
        <a 
          href="mailto:mykyta.kvitchenko.kb.2023@lpnu.ua" 
          className="text-zinc-400 text-lg hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300"
        >
          Email
        </a>
        
        <a 
          href="https://github.com/masori-steck" 
          target="_blank" 
          rel="noreferrer" 
          className="text-zinc-400 text-lg hover:text-white hover:-translate-y-1 hover:shadow-white transition-all duration-300"
        >
          GitHub
        </a>

         <a 
          href="tel:+380756753928"
          className="text-zinc-400 text-lg hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          phone number: +380756753928
        </a>
      </div>

      {/* Копірайт */}
      <p className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors duration-300 cursor-default mb-2">
        &copy; 2026 Mykyta Kvitchenko.
      </p>

      {/* Вивід системної інформації*/}
      {sysInfo && (
        <p className="text-xs text-zinc-700 font-mono hover:text-zinc-500 transition-colors duration-300">
          System Info: {sysInfo}
        </p>
      )}
      
    </footer>
  );
}

export default Footer;