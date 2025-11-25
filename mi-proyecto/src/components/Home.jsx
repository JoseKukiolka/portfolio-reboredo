import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="absolute top-24 left-8 text-left">

      <ul className="space-y-2 text-lg">
        <li className="flex items-center gap-2 hover:text-blue-600 transition">
          <span className="text-2xl leading-none">•</span>
          <Link to="/info">Info</Link>
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600 transition">
          <span className="text-2xl leading-none">•</span>
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li className="flex items-center gap-2 hover:text-blue-600 transition">
          <span className="text-2xl leading-none">•</span>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}
