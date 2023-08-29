import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element as the app element

function AlertModal({ isOpen, onClose, message }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="modal-overlay fixed inset-0 bg-gray-900 opacity-95"
    >
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{message}</p>
            <button onClick={onClose} className="modal-close">
              <span className="text-2xl">×</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AlertModal;
