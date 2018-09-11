import React from 'react';
import { Close } from 'img';

import './Modal.scss';

const Modal = ({className, id, title, content, footer, style, modalSize, openCloseModal }) => {
  return (
    <div className={`modal fade show-modal ${className}`} style={style?style.modalStyle:{}}  id={id} role="dialog">
      <div className={`modal-dialog ${modalSize?modalSize:'modal-lg'}`} style={style?style.modalDialog:{}}>
        <div className="modal-content align-modal" style={style?style.alignModalStyle:{}}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <div data-dismiss="modal" onClick={openCloseModal}><div>
              <span><img style ={{ height: '14px'}} src={Close}/></span>
            </div></div>
          </div>
          {content}
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
