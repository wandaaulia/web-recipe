import { createSlice } from '@reduxjs/toolkit'
import iconChicken from '../assets/img/chicken-c.png';
import iconBeef from '../assets/img/beef-c.png';
import iconDessert from '../assets/img/dessert-c.png';
import iconPasta from '../assets/img/pasta-c.png';
import iconSeafood from '../assets/img/seafood-c.png';
import iconVegetarian from '../assets/img/vegetarian-c.png';

const initialState = {
  value: 0,
activeObject: null,
itemList:  ['chicken', 'beef', 'dessert', 'pasta', 'seafood', 'Vegetarian'],
itemCategory:  [
    { id: 1, img: iconChicken, name: 'Chicken'},
    { id: 2, img: iconBeef, name: 'Beef'},
       { id: 3, img: iconDessert, name: 'Dessert'},
        { id: 4, img: iconPasta, name: 'Pasta'},
         { id: 5, img: iconSeafood, name: 'Seafood'},
          { id: 6, img: iconVegetarian, name: 'Vegetarian'}
],
unfav: null,
itemFav : [],
modalLogin : false,
tutorial :{
},
}

export const recipeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setOpenMenu: (state) => {
      state.isMenu = true
    },
    setActiveCat : (state, action) => {
      state.activeObject = state.itemList[action.payload]
    },
    unSetActiveCat : (state) => {
      state.activeObject = null;
    },
     setFav : (state, action) => {
       const pseudoId = Math.random().toString(16).slice(2);

    state.itemFav.push({
      id: pseudoId,
      userEmail : action.payload.userEmail,
      idMeal:  action.payload.idMeal,
      strMealThumb : action.payload.strMealThumb, 
      strMeal : action.payload.strMeal
     });
    },
    unSetFav : (state, action) => {
     state.itemFav = state.itemFav.filter((item) => item.id !== action.payload);
    },
    setModalLogin : (state) => {
      state.modalLogin = true;
    },
    unSetModalLogin : (state) => {
      state.modalLogin = false;
    },

    setTutorial : (state, action) => {
      state.tutorial = action.payload;
     state.tutorialMessage = null;
    },
     unSetTutorial : (state) => {
      state.tutorial = null;
    },
  },
})

export const { setTutorial, unSetTutorial, setActiveCat, unSetActiveCat, setFav, unSetFav, setModalLogin, unSetModalLogin  } = recipeSlice.actions

export default recipeSlice.reducer