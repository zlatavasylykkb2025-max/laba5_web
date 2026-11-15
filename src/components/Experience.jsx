function Experience() {
  return (
    <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
        Досвід роботи
      </h2>
      <ul className="space-y-4">
        <li className="p-5 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-100 dark:border-slate-600">
          <strong className="text-xl text-blue-700 dark:text-blue-300 block mb-1">Студентка</strong>
          <p className="text-slate-500 dark:text-slate-300 mt-3">Досвід роботи: немає</p>
        </li>
      </ul>
    </section>
  );
}

export default Experience;