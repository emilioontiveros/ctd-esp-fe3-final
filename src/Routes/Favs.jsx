import { Button } from "@mui/material";
import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  
  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <div className={state.theme} 
    style={{minHeight: "85vh", padding: "20px", display: "flex", flexDirection: "column"}}>
      <h1 style={{textAlign: "center"}}>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map(doctor => (
        <Card key={doctor.id} id={doctor.id} name={doctor.name} username={doctor.username}/>
        ))}
      </div>
      <Button 
      onClick={() => {
        dispatch({
          type: "FAVS",
          payload: {
            ...state,
            favs: []
          }
        });
        localStorage.setItem("favoritos", JSON.stringify([]));
      }}
      sx={state.theme === "dark" ?
        {bgcolor: "white", color: "black", "&:hover": {backgroundColor: "black", color: "white", border: "2px solid white"}} :
        {bgcolor: "black", color: "white", "&:hover": {backgroundColor: "white", color: "black", border: "2px solid black"}}}
      >Eliminar todos</Button>
    </div>
  );
};

export default Favs;