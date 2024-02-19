import React from 'react';
import styles from './_modal-overlay.module.scss';



type TModalOverlayProps={
   onClose : ()=>void,
};

function ModalOverlay({onClose}:TModalOverlayProps): JSX.Element{
   return (
      <div  onClick={onClose} className={styles._main}>
      </div>
   );
}



export default ModalOverlay;