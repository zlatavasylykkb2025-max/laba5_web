function Header({ theme, toggleTheme }) {
  return (
    <header className="flex flex-col items-center justify-center bg-slate-800 dark:bg-slate-950 text-white p-10 shadow-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">Василик Злата</h1>
      <p className="text-xl md:text-2xl text-slate-300 font-medium mb-4">Студентка</p>
      <button
        onClick={toggleTheme}
        className="px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 font-semibold transition-colors"
      >
        {theme === 'light' ? 'Темна тема' : 'Світла тема'}
      </button>
    </header>
  );
}

export default Header;