import React  from "react";
import './list-ingredients.css';
import ListItemIngredients from "../list-item-ingredients/list-item-ingredients";


function ListIngredients(props){
  
  const arrayBuns = props.data.filter(
    function (item){
      return item.type === 'bun'
    }
   
  );
  const arrayMain = props.data.filter(
    function (item){
      return item.type === 'main'
    }
   
  );

  const arraySauce = props.data.filter(
    function (item){
      return item.type === 'sauce'
    }
   
  );
  return(
    <ul className="tablist pt-10">
      <li className="mb-10">
        <h2 className="mb-6 text text_type_main-medium">Булки</h2>
        <div className="grid">
          {
            arrayBuns.map((element,index)=>{
              return(
                <ListItemIngredients 
                  key={index}
                  image={element.image}
                  price={element.price}
                  name={element.name}
                />
              )

            })
          }
        </div>
      </li>
      <li className="mb-10">
        <h2 className="mb-6 text text_type_main-medium">Соусы</h2>
        <div className="grid">
          {
            arraySauce.map((element,index)=>{
              return(
                <ListItemIngredients 
                  key={index}
                  image={element.image}
                  price={element.price}
                  name={element.name}
                />
              )

            })
          }
        </div>
      </li>
      <li className="mb-10">
        <h2 className="mb-6 text text_type_main-medium">Начинки</h2>
        <div className="grid">
          {
            arrayMain.map((element,index)=>{
              return(
                <ListItemIngredients 
                  key={index}
                  image={element.image}
                  price={element.price}
                  name={element.name}
                />
              )

            })
          }
        </div>
      </li>
    </ul>
  )
}

export default ListIngredients;