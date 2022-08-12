import React from "react";
import { useDispatch } from "react-redux";
import ButtonFavNew from "./ButtonFavNew";
import { setTutorial, unSetTutorial} from "../features/recipeSlice";
import Swal from "sweetalert2";

const ButtonBar = (props) => {
  const { item, idMeal } = props;
  const dispatch = useDispatch();

  const handleTutorial = async () => {
   if(!item) {
       await dispatch(unSetTutorial());
       Swal.fire({
            title: "This tutorial isn't available anymore",
            confirmButtonText: "Ok",
             confirmButtonColor: 'rgb(248 113 113)',
            backdrop: false,
            color: '#ffff',
            background: 'rgba(0, 0, 0, .7)',
          }); 

      
   } else {
     const test = item.split('v=');
  await dispatch(setTutorial({idMeal: idMeal, item:test[1]}));
   }

  };

  return (
    <>
      <button
        onClick={handleTutorial}
        className="flex justify-center items-center mr-3 text-sm bg-red-400 text-white px-0 w-1/2 py-3 text-center  md:px-6 md:py-1 rounded-full"
      >
        {" "}
        Watch Tutorial{" "}
      </button>
      <ButtonFavNew
        idMeal={props.idMeal}
        strMealThumb={props.strMealThumb}
        strMeal={props.strMeal}
      />
    </>
  );
};

export default ButtonBar;
