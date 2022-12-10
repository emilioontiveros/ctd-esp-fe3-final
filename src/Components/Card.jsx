import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const navigate = useNavigate();
  const { state, dispatch } = useContext(ContextGlobal);
  const [favorito, setFavorito] = useState(false);
  const [update, setUpdate] = useState(false);

  const addFav = () => {
    const favoritos = localStorage.getItem("favoritos");
    if (favoritos) {
      let listaParseada = JSON.parse(favoritos);
      const listaFiltrada = listaParseada.filter(item => item.id !== id);
      const existe = listaFiltrada.length !== listaParseada.length;
      existe ? listaParseada = listaFiltrada : listaParseada.push({name: name, username: username, id: id});
      localStorage.setItem("favoritos", JSON.stringify(listaParseada));
      dispatch({
        type: "FAVS",
        payload: {
          ...state,
          favs: listaParseada
        }
      })
    } else {
      localStorage.setItem("favoritos", JSON.stringify([{name: name, username: username, id: id}]))
      dispatch({
        type: "FAVS",
        payload: {
          ...state,
          favs: [{name: name, username: username, id: id}]
        }
      })
    }
    setFavorito(!favorito)
    setUpdate(!update)
  }

  useEffect(() => {
    const favoritos = localStorage.getItem("favoritos");
    if (favoritos) {
      const lista = JSON.parse(favoritos)
      const cardEncontrada = lista.find(item => item.id === id);
      if (cardEncontrada) {
        setFavorito(true)
      }
    }
  }, [update])

  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="doctor" onClick={() => navigate(`/dentist/${id}`)}/>
      <h4>{name}</h4>
      <p>{username}</p>
      <button onClick={addFav} className={favorito ? "favButton added" : "favButton"}>{favorito ? "Fav" : "Add fav"}</button>
    </div>
  )
  

};

export default Card;
