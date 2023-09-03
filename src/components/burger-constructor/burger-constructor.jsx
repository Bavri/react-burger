import React from 'react';
import styles from './_burger-constructor.module.scss';
import { ConstructorElement, CurrencyIcon,Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/modal/modal';
import OrderDetails from '../order-details/order-details';
import PropTypes from 'prop-types';

function BurgerConstructor(props){
   const [modal,setModal]= React.useState(false);
   const handleOpenModal = () => {
      setModal(true);
   };

   const handleCloseModal = () => {
      setModal(false);
   };

   return(
      <>
         {modal&&<Modal onClose={handleCloseModal} children={<OrderDetails/>}></Modal>}
         <section className={styles._main}>
            <div className={styles._scroll}>
               <div className={styles._wrapperConstructor}>
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
                     thumbnail={props.data[1].image }
                  />
               </div>
            </div>
            <div className={styles._wrapperDecoration}>
               <div className={styles._wrapperCost}>
                  <span className="text text_type_main-large">610</span>
                  <CurrencyIcon type={'primary'}/>
               </div>
               <div className={styles._over}>
                  <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>
                     Оформить заказ
                  </Button>
               </div>
            </div>
         </section>
      </>
   );
}

const objectShape = {
   _id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   proteins: PropTypes.number.isRequired,
   fat: PropTypes.number.isRequired,
   carbohydrates: PropTypes.number.isRequired,
   calories: PropTypes.number.isRequired,
   price: PropTypes.number.isRequired,
   image: PropTypes.string.isRequired,
   image_mobile: PropTypes.string.isRequired,
   image_large: PropTypes.string.isRequired,
   __v: PropTypes.number.isRequired
};

BurgerConstructor.propTypes={
   data:  PropTypes.arrayOf(PropTypes.shape(objectShape)),
};

export default BurgerConstructor;