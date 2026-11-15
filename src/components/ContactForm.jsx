import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // якщо користувач уже закрив вікно в цій сесії, не показуємо знову
    if (sessionStorage.getItem('formClosed')) return;

    const timer = setTimeout(() => setIsOpen(true), 3000); // для тесту 3 с, потім змініть на 60000
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem('formClosed', 'true');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-slate-800 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Зворотний зв'язок</h2>
              <button
                onClick={closeModal}
                className="px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-lg"
              >
                Закрити
              </button>
            </div>

            <form
              action="https://formspree.io/f/ВАШ_ЕНДПОЙНТ"
              method="POST"
              className="flex flex-col gap-3"
            >
              <input
                name="name"
                placeholder="Ім'я"
                required
                className="border border-slate-300 rounded-lg p-2"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="border border-slate-300 rounded-lg p-2"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Номер телефону"
                required
                className="border border-slate-300 rounded-lg p-2"
              />
              <textarea
                name="message"
                placeholder="Повідомлення"
                rows="4"
                required
                className="border border-slate-300 rounded-lg p-2"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
              >
                Надіслати
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
