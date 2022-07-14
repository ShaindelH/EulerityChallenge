import React, {useEffect, useReducer } from "react";
import { PetReducer } from "../reducer/PetReducer";

export const PetContext = React.createContext();

export const PetProvider = (props) => {
  const [petState, dispatch] = useReducer(PetReducer, {
    pets: [],
  }
  );
  useEffect(() => {
    fetch(`http://eulerity-hackathon.appspot.com/pets`)
    .then(result => result.json())
    .then((data) => {
      let tempPets = data.map(pet => {
          return {...pet, selected: false, display:true}
      })
        dispatch({type: 'INITIALIZE', pets: tempPets})
      });
    },[]);

  
  return (
    <PetContext.Provider
      value={{
        pets: petState.pets,
        dispatch,
      }}
    >
      {props.children}
    </PetContext.Provider>
  );
};
