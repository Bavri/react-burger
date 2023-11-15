import React from 'react';
import styles from './_modal-overlay.module.scss';
import PropTypes from 'prop-types';

function ModalOverlay(props){
   return (
      <div  onClick={props.onClose} className={styles._main}>
      </div>
   );
}


ModalOverlay.propTypes={
   onClose : PropTypes.func.isRequired
};

export default ModalOverlay;