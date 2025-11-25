import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

export default function Contacto() {
  return (
    <>
      <div className="absolute top-28 left-8">
        <ul className="text-lg">
          <li className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
            <span className="text-2xl leading-none">•</span>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="absolute top-24 right-16 w-[420px] text-left">
        <h2 className="text-lg mb-2">Contacto:</h2>

        <p className="text-gray-800 leading-relaxed mb-2">
          Teléfono: +54 9 11 5147-7437
        </p>
        <p className="text-gray-800 leading-relaxed mb-2">
          Email: tobiasreboredo15@gmail.com
        </p>
        <p className="text-gray-800 leading-relaxed mb-2 flex items-center gap-2">
          <Linkedin />
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </>
  );
}
