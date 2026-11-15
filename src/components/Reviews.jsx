import { useState, useEffect } from 'react';

const VARIANT = 3; // ваш номер у журналі

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error('Помилка:', err));
  }, []);

  return (
    <section className="md:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-purple-500 pb-2 inline-block">
        Відгуки колишніх роботодавців
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {comments.map(c => (
          <div
            key={c.id}
            className="p-5 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-100 dark:border-slate-600"
          >
            <h4 className="font-bold text-purple-700 dark:text-purple-300">{c.name}</h4>
            <small className="text-slate-500 dark:text-slate-300">{c.email}</small>
            <p className="mt-2 text-slate-600 dark:text-slate-200">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;