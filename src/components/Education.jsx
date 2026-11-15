function Education() {
  const skills = [
    'UI/UX designer', 'Розробка Python скриптів',
    'OSINT', 'Промпт-інжиніринг', 'Високі soft skills',
  ];

  return (
    <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-b-2 border-emerald-500 pb-2 inline-block">
        Освіта
      </h2>
      <div className="mb-8 p-5 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-100 dark:border-slate-600">
        <strong className="text-xl text-emerald-700 dark:text-emerald-300 block mb-1">
          Національний університет "Львівська політехніка"
        </strong>
        <p className="text-slate-600 dark:text-slate-300 font-medium mt-2">
          Спеціальність "Кібербезпека", 2 курс.
        </p>
      </div>

      <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-4 border-b-2 border-amber-500 pb-2 inline-block">
        Навички
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-4 py-2 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-100 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors cursor-default shadow-sm border border-slate-200 dark:border-slate-500"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Education;