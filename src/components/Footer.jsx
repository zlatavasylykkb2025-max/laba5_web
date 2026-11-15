import { useState, useEffect } from 'react';

function Footer() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    // зберігаємо дані в localStorage
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);

    // зчитуємо все з localStorage
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    setInfo(data);
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-400 p-10 text-center mt-12 rounded-t-3xl shadow-inner">
      <p className="mb-3 text-lg font-medium">
        Місто: <span className="text-white">Львів</span>
      </p>
      <p className="text-lg font-medium mb-6">
        Email:{' '}
        <a
          href="mailto:zlata.vasylyk.kb.2025@lpnu.ua"
          className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
        >
          zlata.vasylyk.kb.2025@lpnu.ua
        </a>
      </p>

      <h3 className="font-bold text-slate-300 mb-2">Інформація про систему</h3>
      <div className="text-xs break-all space-y-1">
        {Object.entries(info).map(([key, value]) => (
          <p key={key}>
            <b>{key}:</b> {value}
          </p>
        ))}
      </div>
    </footer>
  );
}

export default Footer;