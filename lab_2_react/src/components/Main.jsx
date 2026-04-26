function Main({ theme }) {
  const isDark = theme === 'dark';

  // Базові класи для карток, щоб не дублювати код
  const cardClasses = `border rounded-xl p-4 shadow-lg transition-all duration-300 group ${
    isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'
  }`;
  
  const textClasses = isDark ? 'text-zinc-300' : 'text-zinc-700';
  const borderSubClasses = isDark ? 'border-zinc-800' : 'border-zinc-200';

  return (
    <main className="flex flex-col gap-4 w-full max-w-4xl mx-auto my-4">
      
      {/* Про себе */}
      <section className={`${cardClasses} hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30`}>
        <h2 className={`text-2xl font-bold text-blue-500 border-b pb-2 mb-4 group-hover:text-blue-400 transition-colors ${borderSubClasses}`}>
          Про себе
        </h2>
        <p className={`${textClasses} leading-relaxed`}>
          Мені 19 років, і я активно розвиваюся у сфері інформаційної безпеки та розробки на Python. 
          Маю досвід роботи з архітектурою комп'ютерних систем та мережами, базові навички проведення penetration testing, 
          базові навички Python, Java Script. 
          Ціную дисципліну як у навчанні, так і в особистому розвитку. Цікавлюсь спортом, кіберспортом, шахами, формулою 1, фільмами, музикою.
        </p>
      </section>

      {/* Освіта */}
      <section className={`${cardClasses} hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30`}>
        <h2 className={`text-2xl font-bold text-emerald-500 border-b pb-2 mb-4 group-hover:text-emerald-400 transition-colors ${borderSubClasses}`}>
          Освіта
        </h2>
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg border ${isDark ? 'bg-zinc-950/50 border-zinc-800/50' : 'bg-zinc-50 border-zinc-200'}`}>
          <span className={`font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>Національний університет "Львівська політехніка" - Кібербезпека</span>
          <span className="mt-2 sm:mt-0 text-emerald-600 text-sm font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            2023 - теперішній час
          </span>
        </div>
      </section>

      {/* grid для навичок */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Технічні навички */}
        <section className={`${cardClasses} hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30`}>
          <h2 className={`text-2xl font-bold text-purple-500 border-b pb-2 mb-4 group-hover:text-purple-400 transition-colors ${borderSubClasses}`}>
            Технічні навички
          </h2>
          <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-500'} mb-4 text-sm italic`}>
            Загальний рівень моїх технічних навичок невеликий, але я стараюсь його розвивати.
          </p>
          <ul className="flex flex-wrap gap-2">
            {['Python', 'Java Script', 'Основи Penetration testing', 'Networks and Networks security'].map(skill => (
              <li key={skill} className={`px-3 py-1.5 rounded-md text-sm border transition-all cursor-default hover:bg-purple-500/20 hover:text-purple-600 hover:border-purple-500/50 ${
                isDark ? 'bg-zinc-800 text-zinc-300 border-zinc-700' : 'bg-zinc-100 text-zinc-700 border-zinc-300'
              }`}>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Соціальні навички */}
        <section className={`${cardClasses} hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/30`}>
          <h2 className={`text-2xl font-bold text-orange-500 border-b pb-2 mb-4 group-hover:text-orange-400 transition-colors ${borderSubClasses}`}>
            Соціальні навички
          </h2>
          <ul className="space-y-3">
            {['Дисципліна', 'Мотивація', 'Критичне мислення', 'Адаптивність'].map(skill => (
              <li key={skill} className={`flex items-center gap-3 transition-colors hover:text-orange-500 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                <span className="w-2 h-2 rounded-full bg-orange-500"></span> {skill}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}

export default Main;