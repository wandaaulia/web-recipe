import React, { useState } from "react";
import AppBar from "../component/AppBar";
import { useParams } from "react-router-dom";
import { useGetRecipeDetailQuery } from "../services/Apis";
import ContainerList from "../component/ContainerList";
import Footer from "../component/Footer";
import ButtonBar from "../component/ButtonBar";
import { useSelector } from "react-redux";
// import { LazyLoadImage } from "react-lazy-load-image-component";


const getIngredient = (meal) => {
  const result = [];
  for (let i = 1; i <= 30; i++) {
    if (meal[`strIngredient${i}`] === "") {
      break;
    }
    if (meal[`strIngredient${i}`] === undefined) {
      break;
    }
      if (meal[`strIngredient${i}`] === null) {
      break;
    }
    result.push(meal[`strIngredient${i}`]);
  }
  return result;
};

const getMeasurement = (meal) => {
  const result = [];
  for (let i = 1; i <= 30; i++) {
    if (meal[`strMeasure${i}`] === "") {
      break;
    }
    if (meal[`strMeasure${i}`] === undefined) {
      break;
    } 
     if (meal[`strMeasure${i}`] === null) {
      break;
    }

    result.push(meal[`strMeasure${i}`]);
  }
  return result;
};

const DetailItem = () => {
  const [showDesc, setShowDesc] = useState(false);
  const [activeDesc, setActiveDesc] = useState("Ingredients");
  const listDesc = ["Ingredients", "Instructions"];

  const { id } = useParams();

  const tutorial = useSelector((state) => state.recipe.tutorial);

  let dataArray;
  let resultDesc;
  let desc;
  let dataIng;
  let dataMea;
  let measureIng;
  let filterArray;
  let res = [];
  let isData = false;

  const openDesc = (index) => {
    if (index === 0) {
      setActiveDesc(listDesc[index]);
      setShowDesc(false);
    } else {
      setActiveDesc(listDesc[index]);
      setShowDesc(true);
    }
  };

  const { data, error, isLoading } = useGetRecipeDetailQuery(id);

  if (data) {
    dataArray = data.meals;

    data.meals.forEach((item) => {
      dataIng = getIngredient(item);
      dataMea = getMeasurement(item);
    });

    if (dataIng && dataMea) {
      measureIng = dataIng.map((item, index) => {
        const measure = dataMea[index];
        return `${measure}  ${item}`;
      });

      filterArray = measureIng.filter((item) => item !== undefined);

    }
  }

  const styleDesc = (index) => {
    if (listDesc[index] === activeDesc) {
      return "md:mr-10 mr-8 border-b-2 border-solid border-red-400 text-xl font-semibold black-title-detail md:w-11/12 md:mx-0 mx-3 xl:text-3xl 2xl:text-4xl";
    } else {
      return "md:mr-10 mr-8 text-xl font-semibold text-gray-400 md:w-11/12 md:mx-0 mx-3 xl:text-3xl 2xl:text-4xl";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AppBar />
      <div className="flex-1 mb-0">
        {error ? (
          <div className="mx-3">Oh no, there was an error</div>
        ) : isLoading ? (
          <div className="ml-8">Loading...</div>
        ) : data ? (
          dataArray.map((item) => {
            resultDesc = item.strInstructions.split("\r\n");
            desc = resultDesc.filter((item) => item);


             if(desc.indexOf('1') === 1 ) {
                  for (let i = 1; i < desc.length; i++) {
                if (i % 2 === 0) {
                   res.push(desc[i]);
                }
                  if (i % 4 === 0) {
                 res.push(desc[i]);
                } 
                continue;
              }
              isData = true;
            }

               if(desc.indexOf('1') === 0 ) {
                  for (let i = 0; i < desc.length; i++) {
                if (i % 2 === 0) {
                   continue;
                }
               res.push(desc[i]);
              }
              isData = true;
            }
     
               if (desc.includes("STEP 1")) {
              for (let i = 0; i < desc.length; i++) {
                if (i % 2 === 0) {
                  continue;
                }
                res.push(desc[i]);
              }
              isData = true;
            } 
            

            return (
              <div key={item.idMeal}>
                <div className=" flex flex-col md:flex-row md:mx-10 md:items-center md:justify-center">
                  
                   {tutorial ? (
                    <div className="md:mt-4 w-11/12 mx-auto md:w-9/12  lg:w-7/12  xl:w-8/12 xl:pr-4 xl:h-fit h-fit pt-4 lg:pt-10  md:order-last md:mx-0">
                      <div className="tutorial-youtube px-2">
                        <iframe
                         width="500"
                          height="480"
                          src={`https://www.youtube.com/embed/${tutorial.item}?autoplay=1&mute=0`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
                          allowFullScreen
                          autoPlay ={ true}
                          muted= {false}
                          title="video"
                        />{" "}
                        
                      </div>
                       </div>
                    ) : (

                  <div className=" w-11/12 mx-auto md:w-6/12 lg:w-96 lg:h-80  xl:w-2/6 xl:pr-4 xl:h-fit h-72 pt-4 lg:pt-10  md:order-last md:mx-0">
 {/* <LazyLoadImage alt="img"  src={item.strMealThumb}  className="w-full h-full rounded-lg  object-cover" /> */}
                           <img alt="img" src={item.strMealThumb} className="w-full h-full rounded-lg  object-cover"/>

                  </div>)
                   }

                  <div className="md:pt-10  md:w-7/12 md:mx-auto mx-2 lg:pl-3 xl:ml-0 pt-8 xl:pl-4 pt-4 md:pt-0 ">
                    <div className="w-11/12 mx-auto  h-100 md:w-full">
                      <h2 className="text-2xl text-black text-left pt-4 pb-1 font-bold md:text-5xl md:mx-auto lg:text-5xl 2xl:text-5xl 2xl:leading-snug">
                        {item.strMeal}{" "}
                      </h2>
                      <p className="text-base text-gray-country md:mt-4 ">
                        {" "}
                        {item.strArea}{" "}
                      </p>
                      <p className="text-base mt-4 font-bold text-dark-gray-detail ">
                        {" "}
                        Category :{" "}
                        <span className="font-normal">
                          {" "}
                          {item.strCategory}{" "}
                        </span>{" "}
                      </p>{" "}
                      <p className="text-base mt-2 font-bold text-dark-gray-detail ">
                        {" "}
                        Total Ingredients :{" "}
                        <span className="font-normal">
                          {" "}
                          {dataIng.length}{" "}
                        </span>{" "}
                      </p>
                    </div>

                    <div className="hidden md:mt-8 lg:mt-10 xl:mt-14 md:flex flex-row mt-6 md:w-9/12 lg:w-6/12 h-10">
                      <ButtonBar
                        item={item.strYoutube}
                        idMeal={item.idMeal}
                        strMealThumb={item.strMealThumb}
                        strMeal={item.strMeal}
                      />
                    </div>

                    <div className="z-10000  border-t border-solid border-gray-200 flex fixed bottom-0 justify-center py-2  h-16  inset-x-0 mb-0 px-4  bg-white md:hidden flex-row">
                      <ButtonBar
                        item={item.strYoutube}
                        idMeal={item.idMeal}
                        strMealThumb={item.strMealThumb}
                        strMeal={item.strMeal}
                      />
                    </div>
                     
                  </div>
                </div>

                <div className="pt-10 w-11/12 md:mx-auto mx-2  pb-8 md:pb-4 xl:pt-24 xl:pb-20">
                  <div className="md:hidden flex flex-row ">
                    {listDesc.map((item, index) => (
                      <h3
                        key={index}
                        className={styleDesc(index)}
                        onClick={() => openDesc(index)}
                      >
                        {item}
                      </h3>
                    ))}
                  </div>

                  <div className="md:hidden">
                    {!showDesc && (
                      <div className="mx-3 md:mx-0 text-justify">
                        {filterArray.map((d, index) => {
                          return (
                            <div key={index} className="my-3 text-justify ">
                              {index + 1}. {d}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {showDesc && (
                      <div className="mx-3 md:mx-0 text-left">
                        {isData
                          ? res.map((d, index) => (
                              <p key={index} className="my-3 text-justify ">
                                {d}
                              </p>
                            ))
                          : desc.map((d, index) => (
                              <p key={index} className="my-3 text-justify ">
                                {d}
                              </p>
                            ))}
                      </div>
                    )}
                  </div>

                  <div className="hidden md:flex flex-col">
                    <h3 className="text-xl font-semibold text-black mx-1 xl:text-3xl 2xl:text-4xl">
                      {listDesc[0]}
                    </h3>
                    <div className="mx-1 text-justify">
                      {filterArray.map((d, index) => {
                        return (
                          <div key={index} className="my-3 text-justify ">
                            {index + 1}. {d}
                          </div>
                        );
                      })}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-black  mx-1 xl:text-3xl 2xl:text-4xl">
                      {listDesc[1]}
                    </h3>
                    <div className="mx-1   text-left">
                      {isData
                        ? res.map((d, index) => (
                            <p key={index} className="my-3 text-justify ">
                              {d}
                            </p>
                          ))
                        : desc.map((d, index) => (
                            <p key={index} className="my-3 text-justify ">
                              {d}
                            </p>
                          ))}
                    </div>
                  </div>
                </div>
                <ContainerList
                  title={item.strCategory}
                  query={item.strCategory}
                />
              </div>
            );
          })
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default DetailItem;
