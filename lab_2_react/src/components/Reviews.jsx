import { useState, useEffect } from 'react';

// Приймаємо theme як проп
function Reviews({ theme }) {
  const [comments, setComments] = useState([]);
  
  // Перевіряємо, чи зараз темна тема
  const isDark = theme === 'dark';

  useEffect(() => {
    // Асинхронне отримання даних
    fetch('https://jsonplaceholder.typicode.com/posts/8/comments')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error("Помилка API:", err));
  }, []);

  return (
    // Головний контейнер секції відгуків
    <section className={`p-6 rounded-xl border transition-colors duration-300 ${
      isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
    }`}>
      
      <h2 className={`text-xl font-bold mb-4 italic ${
        isDark ? 'text-blue-400' : 'text-blue-600'
      }`}>
        Відгуки
      </h2>
      
      <div className="space-y-4">
        {comments.length === 0 ? (
          // Текст завантаження
          <p className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>
            Завантаження коментарів...
          </p>
        ) : (
          // Рендер карток з коментарями
          comments.map(c => (
            <div 
              key={c.id} 
              className={`p-4 border-l-4 border-emerald-500 rounded transition-colors duration-300 ${
                isDark ? 'bg-zinc-950/80 shadow-md' : 'bg-white shadow-sm'
              }`}
            >
              <p className={`text-sm font-bold ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                {c.email}
              </p>
              
              <p className={`text-sm mt-2 ${
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                {c.body}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Reviews;