import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Button, Icon, Modal } from 'rsuite';

const ConfirmModal = forwardRef((props, ref) => {
  const { confirmDelete } = props;
  const [isShow, setIsShow] = useState(false);
  const [rowIndex, setRowIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    open(rowIndex) {
      setIsShow(true);
      setRowIndex(rowIndex);
    },
    close() {
      setIsShow(false);
    }
  }))

  function close() {
    setIsShow(false)
  }

  return (
    <div className="modal-container">
      <Modal backdrop="static" show={isShow} onHide={close} size="xs">
        <Modal.Body>
          <Icon
            icon="remind"
            style={{
              color: '#ffb300',
              fontSize: 24
            }}
          />
          {'   '}
          Bạn có chắc chắn muốn xoá Sản phẩm ?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => confirmDelete(rowIndex)} appearance="primary">
            Ok
          </Button>
          <Button onClick={close} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
})

export default ConfirmModal;