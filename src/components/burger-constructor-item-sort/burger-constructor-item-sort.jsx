
import { ConstructorElement,DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { DELETE_INGREDIENT,TOTAL_DELETE_INGREDIENT } from '../../services/actions/burger-constructor';
import PropTypes from 'prop-types';
import { ingredientsShape } from '../../utils/prop-types';

function BurgerConstructorItemSort({item, index, moveCard}){
   const dispatch=useDispatch();
   const deleteItem=()=>{
      dispatch ({type:TOTAL_DELETE_INGREDIENT,price:item.price});
      dispatch({type:DELETE_INGREDIENT,index});
   };

   const ref = useRef(null);
   const [{ handlerId }, drop] = useDrop({
      accept: 'component',
      collect(monitor) {
         return {
            handlerId: monitor.getHandlerId()
         };
      },
      hover(item, monitor) {
         if (!ref.current) {
            return;
         }

         const dragIndex = item.index;
         const hoverIndex = index;


         if (dragIndex === hoverIndex) {
            return;
         }

         const hoverBoundingRect = ref.current?.getBoundingClientRect();
         const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
         const clientOffset = monitor.getClientOffset();
         const hoverClientY = clientOffset.y - hoverBoundingRect.top;

         if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
         }

         if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
         }
         moveCard(dragIndex, hoverIndex);
         item.index = hoverIndex;
      }
   });
   const [, drag] = useDrag({
      type: 'component',
      item: () => ({ id: item.id, index }),
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   });
   drag(drop(ref));
   const preventDefault = (e) => e.preventDefault();

   return(
      <div ref={ref} onDrop={preventDefault} data-handler-id={handlerId}>
         <DragIcon/>
         <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image}
            handleClose={()=>deleteItem()}
         />
      </div>
   );
}

BurgerConstructorItemSort.propTypes={
   data: PropTypes.shape(ingredientsShape),
   index: PropTypes.number.isRequired,
   moveCard : PropTypes.func.isRequired
};


export default  BurgerConstructorItemSort;