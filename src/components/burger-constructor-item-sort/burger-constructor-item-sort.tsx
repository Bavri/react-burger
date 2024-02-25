
import { ConstructorElement,DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { SyntheticEvent, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { DELETE_INGREDIENT,TOTAL_DELETE_INGREDIENT } from '../../services/actions/burger-constructor';

import { TDragObject, TDragProps, TDropProps, TIngredientDrag } from '../../utils/types';


type TBurgerConstructorItemSortProps={
   item:TIngredientDrag,
   index:number,
   moveCard:(dragIndex: number, hoverIndex: number)=>void,
};

function BurgerConstructorItemSort({item, index, moveCard}:TBurgerConstructorItemSortProps){
   const dispatch=useDispatch();
   const deleteItem=()=>{
      dispatch ({type:TOTAL_DELETE_INGREDIENT,price:item.price});
      dispatch({type:DELETE_INGREDIENT,index});
   };

   const ref = useRef<HTMLDivElement>(null);
   const [{ handlerId }, drop] = useDrop<TDragObject,unknown,TDropProps>({
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
         const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

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
   const [, drag] = useDrag<TDragObject,unknown,TDragProps>({
      type: 'component',
      item: () => ({ id: item.id, index }),
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   });
   drag(drop(ref));
   const preventDefault = (e:SyntheticEvent) => e.preventDefault();

   return(
      <div ref={ref} onDrop={preventDefault} data-handler-id={handlerId}>
         <DragIcon type={'secondary'}/>
         <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image}
            handleClose={()=>deleteItem()}
         />
      </div>
   );
}



export default  BurgerConstructorItemSort;