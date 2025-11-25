import { Link } from "react-router-dom";

import Img1 from "../png/img1 1.png";
import Img2 from "../png/0154 1.png";
import GuaNerojo from "../png/guanterojo 1.png";
import FotoJero from "../png/FOTO DE JERO 1.png";
import CasaEsquina from "../png/CasaEsquinaNoche1 1.png";

export default function Proyectos() {
  return (
    <div className="relative h-screen">
        <div className="absolute top-28 left-8 z-20">
            <ul className="text-lg">
            <li className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
                <span className="text-2xl leading-none">•</span>
            <Link to="/">Home</Link>
            </li>
            </ul>
        </div>

      <div className="absolute top-24 right-16 w-[420px] h-[80vh] overflow-y-auto pr-2">
        <h2 className="text-lg font-semibold mb-4">Proyectos:</h2>

        <img src={Img1} alt="Proyecto 1" className="w-full h-auto rounded-lg shadow-md mb-4" />
        <img src={Img2} alt="Proyecto 2" className="w-full h-auto rounded-lg shadow-md mb-4" />
        <img src={GuaNerojo} alt="Proyecto 3" className="w-full h-auto rounded-lg shadow-md mb-4" />
        <img src={FotoJero} alt="Proyecto 4" className="w-full h-auto rounded-lg shadow-md mb-4" />
        <img src={CasaEsquina} alt="Proyecto 5" className="w-full h-auto rounded-lg shadow-md mb-4" />
      </div>
    </div>
  );
}
