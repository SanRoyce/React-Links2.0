import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./vistas/Home";
import BuscarPersonaje from "./vistas/BuscarPersonaje";
import DetallePersonajes from "./vistas/DetallePersonajes";


export default function App() {
return (
<div className="App">
<BrowserRouter>
<Navbar />
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Pokemones" element={<BuscarPersonaje/>}/>
    <Route path="/Pokemones/:name" element={<DetallePersonajes/>}/>

</Routes>
</BrowserRouter>
</div>
);
}
