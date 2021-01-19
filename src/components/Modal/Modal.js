import React, { useState } from 'react';
import { Button } from 'antd';
import { Modal as ANTDModal } from 'antd';

export const Modal = ({ children, isModalVisible, closeModal }) => {
  //   const handleOk = () => {
  //     setIsModalVisible(false);
  //   };

  //   const handleCancel = () => {
  //     setIsModalVisible(false);
  //   };
  if (!isModalVisible) return null;
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
      Open Modal
    </Button> */}
      <ANTDModal
        title="Basic Modal"
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={closeModal}
      >
        {children}
      </ANTDModal>
    </>
  );
};
