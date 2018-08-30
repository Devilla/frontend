import React from 'react';
import './Modal.scss';

const Modal = ({id, title, content, footer }) => {
  return (
    <div className="modal fade show-modal" id={id} role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content align-modal">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
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
