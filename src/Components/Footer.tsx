import React from 'react'

const Footer:React.FC = () => {
  return (
    <div>
            <footer className="bg-zinc-900 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <a 
                key={social}
                href="#" 
                className="hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                {social}
              </a>
            ))}
          </div>
          <p>© 2024 Bigyan Adhikari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
