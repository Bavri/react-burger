import styles from './_modal.module.scss';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import React, { KeyboardEventHandler, ReactNode, SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';

type TModalProps={
   onClose : ()=>void,
   children: ReactNode,
   header?:string
};

function Modal({onClose,children,header}:TModalProps): JSX.Element{
   const modalRoot = document.getElementById('modal-portal');
   const [showModal, setShowModal] = React.useState(true);
   const ref = React.useRef<HTMLDivElement>(null);
   React.useEffect(() => {
      setShowModal(true);
      setTimeout(() => {
         ref.current?.focus();
      }, 0);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const handleCloseModal = () => {
      setShowModal(false);
      onClose();
   };

   const handleKeyDown = (e:KeyboardEvent) => {
      if (e.key=== 'Escape') {
         handleCloseModal();
      }
   };

   return (
      <>
         { showModal && createPortal(
            <>
               <ModalOverlay onClose={onClose}/>
               <div className={styles._main} ref={ref}
                  onKeyDown={handleKeyDown as unknown as KeyboardEventHandler<HTMLDivElement>} tabIndex={-1} >
                  <div className={styles._header}>
                     <h2>{(header? header: '')}</h2>
                     <button className={styles._close} onClick={handleCloseModal}>
                        <CloseIcon type="primary" />
                     </button>
                  </div>
                  <div onClick={(e:SyntheticEvent) => e.stopPropagation()}>
                     {(children)}
                  </div>
               </div>
            </>
            ,
            modalRoot!
         )
         }

      </>
   );
}


export default Modal;