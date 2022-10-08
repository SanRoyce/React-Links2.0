import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BuscarPersonaje = () => {
  const navigate = useNavigate();
  const [pokemones, setPokemones] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const buscarApi = async () => {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const data = await respuesta.json();

      if (data && data.results) {
        const resultado = data.results.map(({ name }) => name);
        setPokemones(resultado);
      }
    };
    buscarApi();
  }, []);
  const handleId = (event) => {
    const idPokemon = event.target.value;
    setName(idPokemon);
    console.log(idPokemon);
  };
  const buscarPokemon = (event) => {
    event.preventDefault();
    navigate(`/Pokemones/${name}`);
  };
  return (
    <>
      <div className="container mt-5">
        <div class="card text-center">
          <div class="card-header"><h1>Buscador de Personajes</h1></div>
          <div class="">
            <div className="mt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
                alt=""
                width="100px"
              />
            </div>
            <div className="mt-2 ">
              <select onChange={(e) => setName(e.target.value)}>
                <option value="">Seleccione un Pokemón</option>
                {pokemones.map((pokemon, i) => (
                  <option key={i} value={pokemon}>
                    {pokemon}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-2">
              <button onClick={buscarPokemon} class="btn btn-dark">
                Ver Detalle
              </button>
            </div>
          </div>
          <div class="card-footer text-muted mt-2"><h5>Buena Suerte!</h5></div>
        </div>
      </div>
    </>
  );
};

export default BuscarPersonaje;
