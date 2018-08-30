import React from 'react';
import './Modal.scss';

const Modal = ({className, id, title, content, footer, style, closeModal, modalSize }) => {
  return (
    <div className={`modal fade show-modal ${className}`} style={style?style.modalStyle:{}}  id={id} role="dialog">
      <div className={`modal-dialog ${modalSize?modalSize:'modal-lg'}`}>
        <div className="modal-content align-modal" style={style?style.alignModalStyle:{}}>
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" onClick={closeModal} >
              <i className="fa fa-close"></i>
            </button>
            <h4 className="modal-title">{title}</h4>
          </div>
          {content}
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
