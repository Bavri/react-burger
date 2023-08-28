import React from "react";
import './burger-constructor.css'
import { ConstructorElement, CurrencyIcon,Button} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor(props){
  
  return(
    <section className="mainConstructor">
      <div className="scroll">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={props.data[1].image}
          />
          <ConstructorElement
            isLocked={false}
            text={props.data[2].name}
            price={props.data[2].price}
            thumbnail={props.data[2].image}
          />
          
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={props.data[1].image}
          />
        </div>
      </div>
      <div className="wrappercost">
        <div style={{ display: 'flex', gap: '8px', alignItems:'center'}}>
          <span className="text text_type_main-large">610</span>
          <CurrencyIcon/>
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor;