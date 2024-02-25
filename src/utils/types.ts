
import { Identifier } from 'dnd-core';

export type TDragObject = {
   id: string;
   index:number;
};

export type TDragProps = {
   isDragging:boolean;
   opacity?:number;
};

export type TDropProps = {
   handlerId: Identifier|null
}
export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TIngredientDrag = TIngredient & {
  id: string;
  index: number;
  dragId:number;
};