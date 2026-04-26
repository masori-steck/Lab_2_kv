function Header({ theme }) {
  // Перевіряємо, чи зараз темна тема
  const isDark = theme === 'dark';

  return (
    <header className={`flex flex-col items-center border-b pb-8 mb-8 ${isDark ? 'border-zinc-700' : 'border-zinc-300'}`}>
      <h1 className={`text-4xl font-bold mb-2 tracking-widest ${isDark ? 'text-white' : 'text-zinc-900'}`}>
        Владислав Дзюнич
      </h1>
      {/* Смарагдовий текст залишаємо смарагдовим в обох темах, бо він гарно читається */}
      <p className="text-lg text-emerald-500 font-semibold">Студент кібербезпеки | Python Developer & Pentester (basics)</p>
      
      <div className={`mt-4 flex gap-4 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
        <span className={`px-3 py-1 rounded-md ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
          Lviv, Ukraine
        </span>
      </div>
    </header>
  );
}

export default Header;