import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

const Favs = () => {
  const { theme } = useEstadosGlobalesContext();
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className={theme.color}>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
        {favs.length ? (
          favs.map((fav) => (
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
            />
          ))
        ) : (
          <p>There're not favorites</p>
        )}
      </div>
    </div>
  );
};

export default Favs;