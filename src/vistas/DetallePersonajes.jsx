import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DetallePersonajes = () => {
  const [datos, setDatos] = useState(null);
  console.log(datos);
  const { name } = useParams();

  useEffect(() => {
    const buscarApi = async () => {
      const respuesta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const data = await respuesta.json();
      setDatos(data);
    };
    buscarApi();
  }, [name]);

  return (
    <>
      {datos && (
        <>
          <div className=" d-flex justify-content-center ">
            <div className="carta mt-5 p-3 d-flex align-items-center">
              <div className="imagn p-5">
                <img className="tamaño" src={datos.sprites.front_default} />
                <h1>
                  <strong>Name: {name}</strong>
                </h1>
              </div>
              <div>
                <ul>
                  <h4>Statistics:</h4>
                  <li>
                    {datos.stats[0].stat.name}: {datos.stats[0].base_stat}
                  </li>
                  <li>
                    {datos.stats[1].stat.name}: {datos.stats[1].base_stat}
                  </li>
                  <li>
                    {datos.stats[2].stat.name}: {datos.stats[2].base_stat}
                  </li>
                  <li>
                    {datos.stats[3].stat.name}: {datos.stats[3].base_stat}
                  </li>
                  <li>
                    {datos.stats[4].stat.name}: {datos.stats[4].base_stat}
                  </li>
                  <li>
                    {datos.stats[5].stat.name}: {datos.stats[5].base_stat}
                  </li>
                  <li>Type: {datos.types[0].type.name}</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetallePersonajes;
