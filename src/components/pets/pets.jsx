
import React, {useContext, useState} from "react"; 
import {Input, PetCardContainer, Card} from "../card/Card";
import { saveAs } from 'file-saver';
import {Stack, Grid, Button} from '@mui/material';
import {PetContext} from '../../state/petContext/PetsContext';
import styled from "styled-components";
import {Checkbox} from "@mui/material";

export const Pets  = () =>  {
 
  const {pets, dispatch} = useContext(PetContext);
  const[input, setInput] = useState('');

  function filterPets (event) {
    setInput(event.target.value);
    dispatch({type: 'FILTER', filter: input.toLowerCase()});
    }

  function downloadImage()  {
    pets.map(pet => {
      if(pet.selected)
        saveAs(`${pet.url}`, `${pet.title}.jpg`);
    })    
  }
  const PetCard = ({
    pet,
  }) => (
    <PetCardContainer>
        <Checkbox checked={pet.selected} onChange={()=> dispatch({type: 'SELECT_ONE', title: pet.title})}></Checkbox>
        <Card
          title={pet.title}
          date={pet.date}  
          description={pet.description}
          image={pet.url}
        />
        </PetCardContainer>
  )
  return (
    <div >
      <Input
      onChange={filterPets}
      value={input}
      placeholder=" Search for a pet..."
      />
     <Stack direction='row' sx={{justifyContent: "center" }}>
        <Button onClick={() =>dispatch({type: 'SELECT_ALL'})}>Select All</Button>
        <Button onClick={() => dispatch({type: 'CLEAR_ALL'})}>Clear All</Button>
        <Button onClick={downloadImage}>Download Selected Images</Button>
     </Stack>
     <Grid container alignItems="stretch" direction="row" justifyContent="center" spacing={2}>
     {pets.map(pet =>{
      if(pet.display){
      return (
      <Grid item > 
        <PetCard
        pet={pet}
        />
        </Grid>
      )}})}
      
     </Grid>
    </div>
  );
}
