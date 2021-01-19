import ReactDOM from 'react-dom';

export const Modal = ({ children, isModalVisible, closeModal }) => {
  if (!isModalVisible) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal-fade"></div>
      <div title="Basic Modal" visible={isModalVisible} onCancel={closeModal}>
        {children}
      </div>
    </>,
    document.getElementById('modal-root'),
  );
};
