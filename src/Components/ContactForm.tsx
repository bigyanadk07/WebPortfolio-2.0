import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 opacity-0 animate-[fadeIn_0.8s_ease-in_forwards]">
      <form 
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        {submitStatus === 'success' && (
          <div className="p-4 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-green-500/20 
                        animate-[slideDown_0.3s_ease-out]">
            <p className="text-green-400">
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-red-500/20
                        animate-[slideDown_0.3s_ease-out]">
            <p className="text-red-400">
              There was an error sending your message. Please try again.
            </p>
          </div>
        )}

        <div className="relative pt-4 animate-[slideUp_0.4s_ease-out]">
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full px-0 py-2 bg-transparent text-zinc-100
                     border-b-2 border-zinc-700
                     focus:border-blue-400 focus:outline-none
                     transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed"
            required
            disabled={isSubmitting}
          />
          <label 
            htmlFor="name"
            className="absolute left-0 -top-2 text-zinc-600 cursor-text
                     transition-all duration-300
                     peer-placeholder-shown:text-zinc-600
                     peer-placeholder-shown:top-2
                     peer-focus:-top-2
                     peer-focus:text-blue-400
                     peer-focus:text-sm
                     peer-[:not(:placeholder-shown)]:-top-2
                     peer-[:not(:placeholder-shown)]:text-blue-400
                     peer-[:not(:placeholder-shown)]:text-sm"
          >
            Name
          </label>
        </div>

        <div className="relative pt-4 animate-[slideUp_0.5s_ease-out]">
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full px-0 py-2 bg-transparent text-zinc-100
                     border-b-2 border-zinc-700
                     focus:border-blue-400 focus:outline-none
                     transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed"
            required
            disabled={isSubmitting}
          />
          <label 
            htmlFor="email"
            className="absolute left-0 -top-2 text-zinc-600 cursor-text
                     transition-all duration-300
                     peer-placeholder-shown:text-zinc-600
                     peer-placeholder-shown:top-2
                     peer-focus:-top-2
                     peer-focus:text-blue-400
                     peer-focus:text-sm
                     peer-[:not(:placeholder-shown)]:-top-2
                     peer-[:not(:placeholder-shown)]:text-blue-400
                     peer-[:not(:placeholder-shown)]:text-sm"
          >
            Email
          </label>
        </div>

        <div className="relative pt-4 animate-[slideUp_0.6s_ease-out]">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder=" "
            className="peer w-full px-0 py-2 bg-transparent text-zinc-100
                     border-b-2 border-zinc-700
                     focus:border-blue-400 focus:outline-none
                     transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed
                     resize-none"
            required
            disabled={isSubmitting}
          />
          <label 
            htmlFor="message"
            className="absolute left-0 -top-2 text-zinc-600 cursor-text
                     transition-all duration-300
                     peer-placeholder-shown:text-zinc-600
                     peer-placeholder-shown:top-2
                     peer-focus:-top-2
                     peer-focus:text-blue-400
                     peer-focus:text-sm
                     peer-[:not(:placeholder-shown)]:-top-2
                     peer-[:not(:placeholder-shown)]:text-blue-400
                     peer-[:not(:placeholder-shown)]:text-sm"
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 
                   bg-zinc-900 hover:bg-zinc-800
                   border-2 border-zinc-800 hover:border-zinc-700
                   disabled:bg-zinc-900 disabled:cursor-not-allowed
                   text-zinc-100 font-medium rounded-lg
                   transition-all duration-300 ease-out
                   animate-[slideUp_0.7s_ease-out]
                   hover:shadow-lg hover:shadow-blue-500/10"
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

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;