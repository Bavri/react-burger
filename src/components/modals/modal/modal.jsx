import styles from './_modal.module.scss';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

function Modal(props){
   const modalRoot = document.getElementById('modal-portal');
   const [showModal, setShowModal] = React.useState(false);
   const ref = React.useRef(null);
   React.useEffect(() => {
      setShowModal(true);
      setTimeout(() => {
         ref.current?.focus();
      }, 0);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const handleCloseModal = () => {
      setShowModal(false);
      props.onClose();
   };

   const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
         handleCloseModal();
      }
   };

   return (
      <>
         { showModal && createPortal(
            <>
               <ModalOverlay onClose={props.onClose}/>
               <div className={styles._main} ref={ref} onKeyDown={handleKeyDown} tabIndex={-1}>
                  <div className={styles._header}>
                     <h2>{props.header? props.header: ''}</h2>
                     <button className={styles._close} onClick={handleCloseModal}>
                        <CloseIcon type="primary" />
                     </button>
                  </div>
                  <div onClick={(e) => e.stopPropagation()}>
                     {props.children}
                  </div>
               </div>
            </>
            ,
            modalRoot
         )
         }

      </>
   );
}
Modal.PropTypes={
   onClose : PropTypes.func.isRequired
};

export default Modal;