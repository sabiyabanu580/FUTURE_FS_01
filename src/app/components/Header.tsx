import { Github, Linkedin } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo / Name */}
        <h1 className="font-bold text-xl">Sabiya Banu</h1>

       {/* Navigation */}
<div className="flex items-center space-x-6">
  <a href="#about" className="font-semibold hover:text-blue-500">
    About
  </a>

  <a href="#projects" className="font-semibold hover:text-blue-500">
    Projects
  </a>

  <a href="#contact" className="font-semibold hover:text-blue-500">
    Contact
  </a>
          {/* Social Links */}
          <a
            href="https://www.linkedin.com/in/sabiya-banu-35701a3aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/sabiyabanu580"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <Github size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}