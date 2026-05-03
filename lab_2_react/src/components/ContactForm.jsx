import { useState, useEffect } from 'react';

// Приймаємо theme
function ContactForm({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Визначаємо поточну тему світла/темна
  const isDark = theme === 'dark';

  useEffect(() => {
    // Таймер на відкриття вікна 
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  // Базові класи для інпутів (щоб не дублювати код)
  const inputClasses = `p-3 rounded border focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-300 ${
    isDark 
      ? 'bg-zinc-950 border-zinc-800 text-white placeholder-zinc-600' 
      : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400'
  }`;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-all duration-500">
      
      {/* Саме вікно форми */}
      <div className={`p-8 rounded-2xl max-w-md w-full relative shadow-2xl transition-colors duration-300 border ${
        isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-zinc-200'
      }`}>
        
        {/* Кнопка закриття */}
        <button 
          onClick={() => setIsOpen(false)}
          className={`absolute top-4 right-5 font-bold text-xl transition-colors cursor-pointer ${
            isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-red-500'
          }`}
        >
          ✕
        </button>

        <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
          Зворотній зв'язок
        </h2>

        {/* Форма Formspree */}
        <form action="https://formspree.io/f/xqeneyrl" method="POST" className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="ім'я"  required className={inputClasses} />
          <input type="email" name="email" placeholder="Email" required className={inputClasses} />
          <input type="text" name="phone" placeholder="Номер телефону" required className={inputClasses}/>
          
          <textarea name="message" placeholder="Повідомлення" required rows="3" className={`${inputClasses} resize-none`} ></textarea>
          
          <button 
            type="submit" 
            className="cursor-pointer mt-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded transition-all duration-300 active:scale-95">
            Відправити
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default ContactForm;