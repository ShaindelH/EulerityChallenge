import React, {useState, useEffect} from 'react';

export const PetContext = React.createContext();

export const PetProvider = (props) => {

const [pets, setPets] = useState([]);
const [filteredPets, setFilteredPets] = useState([]);

useEffect(() => {
    fetch(`http://eulerity-hackathon.appspot.com/pets`)
    .then(result => result.json())
    .then((data) => {
      let tempPets = data.map(pet => {
          
          return {...pet, selected: false}
      })
        setPets(tempPets);
        setFilteredPets(tempPets);
      });
    },[]);

  return (
      <PetContext.Provider
        value= {{
            pets,
            setPets,
            filteredPets,
            setFilteredPets,
        }}
      >
     {props.children}
      </PetContext.Provider>
  )};