import { Link } from "react-router-dom";

export default function Info() {
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
        <h2 className="text-lg mb-2">Sobre mi:</h2>
        <p className="text-gray-800 leading-relaxed">
            Estudio en ORT, donde participé en 3 proyectos como frontend developer y artista 3D, entre ellos un juego de boxeo en realidad virtual, lo que me hizo aprender a trabajar en equipo con otros artistas y developers, además de haber participado en múltiples eventos como expositor.
            <br />Actualmente estoy buscando oportunidades para aportar en proyectos como artista 3D, en cualquier industria.        </p>
      </div>
    </>
  );
}
