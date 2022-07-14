export function PetReducer (state, action) {
  switch (action.type) {
    case "INITIALIZE":
      return {...state, pets: action.pets};
    case "SELECT_ALL":
      //add select all that are displayed ------------------------------
      return selectAll(state);
    case "CLEAR_ALL":
      return clearAll(state);
    case "SELECT_ONE":
      return selectOne(state, action);
    case "FILTER":
      return filter(state, action);
    default:
      return state;
  }
};

function selectAll(state) {
  return {
    ...state,
    pets: state.pets.map((pet) => {
      return { ...pet, selected: true };
    }),
  };
}

function clearAll(state) {
  return {
    ...state,
    pets: state.pets.map((pet) => {
      return { ...pet, selected: false };
    }),
  };
}
function selectOne(state, action){
  const updatedPets = state.pets.map((pet) => {
    if (pet.title === action.title) {
      return { ...pet, selected: !pet.selected };
    } else return pet;
  });

  return {...state, pets: updatedPets};
}

function filter(state, action) {
  
  if(action.filter.length === 0){
    
    return state;
  }
  const filteredPets = state.pets.map((pet) => {
    console.log(action.filter);
    
    if (
      pet.title.toLowerCase().includes(action.filter) ||
      pet.description.toLowerCase().includes(action.filter)
    ) {
      return {...pet, display: true };
    } else {
      return {...pet, display: false };
    }
  });
  return {...state, pets: filteredPets };
}
