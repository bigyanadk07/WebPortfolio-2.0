import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="bg-zinc-900 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            {[
              { name: "Twitter", url: "https://x.com/Bigyanadk" },
              { name: "GitHub", url: "https://github.com/bigyanadk07" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/bigyanadhikari07" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="hover:text-white transform hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
          <p>© 2024 Bigyan Adhikari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
