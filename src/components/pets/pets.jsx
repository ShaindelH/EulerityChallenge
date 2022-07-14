
import React, {useContext, useState} from "react"; 
import { PetCard, Input} from "../card/Card";
import { saveAs } from 'file-saver';
import {Stack, Grid, Button} from '@mui/material';
import {PetContext} from '../../state/petContext/petContext';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';



export const Pets  = () =>  {

  const {pets,setPets, filteredPets, setFilteredPets} = useContext(PetContext);
  const[input, setInput] = useState('');


  function filterPets (event) {
    setInput(event.target.value);

      setFilteredPets(pets.filter(pet => 
      pet.title.toLowerCase().includes(input.toLowerCase()) || 
      pet.description.toLowerCase().includes(input.toLowerCase())
      ))
    }

  function downloadImage  ()  {
    filteredPets.map(pet => {
    saveAs(`${pet.url}`, `${pet.title}.jpg`);
    })    
      }

function selectAll(){
    let selectedPets =
        filteredPets.map(pet => {
            return {...pet, selected: true}
            }
        )
    setFilteredPets(selectedPets);

     //make changes to master list of pets as well 
     setPets(pets.map(pet =>{
      return {...pet, selected: true}
    }))
}

function clearAll(){
    let unselectedPets =filteredPets.map(pet => {
          return {...pet, selected: false}
            }
        )
        setFilteredPets(unselectedPets);

    //make changes to master list of pets as well 
    setPets(pets.map(pet =>{
      return {...pet, selected: false}
    }))
}
  return (
    <div >
      <Input
      onChange={filterPets}
      value={input}
      placeholder=" Search for a pet..."
      />
     <Stack direction='row' sx={{ justifyContent: "center" }}>
        <Button onClick={selectAll}>Select All</Button>
        <Button onClick={clearAll}>Clear All</Button>
        <Button onClick={downloadImage}>Download Selected Images</Button>
     </Stack>
     <Grid container alignItems="stretch" direction="row" justifyContent="center" spacing={2}>
     {filteredPets.map(pet => 
      <Grid item > 
        <PetCard
        petTitle={pet.title}
        petDescription={pet.description}
        petImage={pet.url}
        petDate={pet.created}
        selected={pet.selected}
        />
        </Grid>
     )}
     </Grid>
    </div>
  );
}
