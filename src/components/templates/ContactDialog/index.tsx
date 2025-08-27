import { useState, type ChangeEvent } from 'react';
import './index.css';
import { useContactDialogStore } from '../../../core/store/contactDialogStore';
export const ContactDialog = () => {
  const { close, isOpen } = useContactDialogStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState('');
  const accessKey = import.meta.env.PUBLIC_FORM_API_KEY;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setResult('Sending...');

    const payload = new FormData();
    payload.append('access_key', accessKey);
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('message', formData.message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      });

      const data = await res.json();

      if (data.success) {
        setResult('Thanks for reaching out! We’ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setResult(data.message || 'Submission failed.');
      }
    } catch (err) {
      setResult('An error occurred.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return;

  return (
    <dialog className='fixed inset-0 z-[999] flex justify-center items-center bg-transparent backdrop-blur-sm w-full h-full'>
      <div className="flex items-center justify-center p-2 sm:p-4 z-50 backdrop-blur-sm relative w-full h-full">
        <button
          className='absolute top-2 right-2 text-white text-2xl z-50 h-9 w-9 bg-sfv-gray-400 rounded-full hover:bg-sfv-gray-500 cursor-pointer'
          onClick={close}
          aria-label="Close dialog"
        >
          <i className="ri-close-large-line ri-sm"></i>
        </button>

        <div className="
        bg-sfv-gray-500 rounded-2xl shadow-lg
        w-full max-w-[95vw] sm:max-w-[800px]
        h-auto
        relative grid xl:grid-cols-2 grid-cols-1 gap-4 overflow-hidden
      ">
          <div className="
          flex flex-col bg-black bg-image lg:justify-center justify-end items-start text-white p-6 relative w-full
          lg:h-full h-[182px] min-h-[120px]
        ">
            <h1 className="text-2xl sm:text-3xl z-10">Content that engages,</h1>
            <p className='z-10 text-lg sm:text-xl pt-1'>converts, and drives results.</p>
            <div className="absolute flex justify-center items-center bg-black opacity-50 h-full w-full inset-0"></div>
          </div>

          {result.startsWith('Thanks') ? (
            <div className="flex justify-center items-center text-white px-2 py-8">
              <p className="text-sf-green-1 text-center text-xs">{result}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-6 py-8 pr-6 pl-4 items-center justify-center'
              noValidate
            >
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder='How can we help you?'
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                disabled={submitting}
                className="green-gradient-bg drop-shadow-2xl px-5 py-2 rounded-4xl text-sf-dark font-thin cursor-pointer"
              >
                {submitting ? 'Sending...' : 'Get started'}
              </button>

              <p className='text-white text-xs opacity-40'>We do not sell or share your information with anyone.</p>

              <div className="flex flex-center justify-center -mt-5 *:text-xs *:text-sf-lila-2">
                <a href="/privacy" target='_blank' className='border-r border-white pr-4 mr-4'>Privacy Policy</a>
                <a href="https://seatify.io/terms-conditions/" target='_blank'>Terms</a>
              </div>

              {result && !result.startsWith('Thanks') && (
                <span className="text-xs text-sf-lila-1 mt-2">{result}</span>
              )}
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
};
