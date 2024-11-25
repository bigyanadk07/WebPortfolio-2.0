import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 animate-fadeIn">
      <form onSubmit={handleSubmit} className="space-y-8">
        {submitStatus === 'success' && (
          <div className="p-4 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-green-500/20 animate-slideDown">
            <p className="text-green-400">Thank you for your message! We'll get back to you soon.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-red-500/20 animate-slideDown">
            <p className="text-red-400">There was an error sending your message. Please try again.</p>
          </div>
        )}

        {/** Input Fields */}
        {['name', 'email'].map(field => (
          <div key={field} className="relative pt-4 animate-slideUp">
            <input
              id={field}
              name={field}
              type={field === 'email' ? 'email' : 'text'}
              value={formData[field as keyof FormData]}
              onChange={handleChange}
              placeholder=" "
              required
              disabled={isSubmitting}
              className="peer w-full px-0 py-2 bg-transparent text-zinc-100 border-b-2 border-zinc-700 focus:border-blue-400 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={field}
            />
            <label
              htmlFor={field}
              className="absolute left-0 -top-2 text-zinc-600 cursor-text transition-all duration-300 peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-blue-400 peer-focus:text-sm"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
          </div>
        ))}

        <div className="relative pt-4 animate-slideUp">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder=" "
            required
            disabled={isSubmitting}
            className="peer w-full px-0 py-2 bg-transparent text-zinc-100 border-b-2 border-zinc-700 focus:border-blue-400 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
            aria-label="message"
          />
          <label
            htmlFor="message"
            className="absolute left-0 -top-2 text-zinc-600 cursor-text transition-all duration-300 peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-blue-400 peer-focus:text-sm"
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-800 hover:border-zinc-700 disabled:bg-zinc-900 disabled:cursor-not-allowed text-zinc-100 font-medium rounded-lg transition-all duration-300 ease-out animate-slideUp"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="animate-pulse">Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
