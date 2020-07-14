import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Form } from 'react-final-form';
import { Button } from 'rsuite';
import FieldItem from './FieldItem';

const FinalForm = forwardRef((props, ref) => {
  const [item, setItem] = useState({});
  const [reset, setReset] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  var _form = {};

  useImperativeHandle(ref, () => ({
    resetForm() {
      setReset(true);
    }
  }))

  //when table onRowClick > display data on the form
  useEffect(() => {
    setIsUpdating(true);
    setItem(props.item);
  }, [props.item]);

  //reset button clicked
  useEffect(() => {
    setItem({});
    setReset(false);
    setIsUpdating(false);
    _form.restart();
  }, [reset]);

  function validateForm(values) {
    let errors = {};
    let { idItem, nameItem, priceItem } = values;
    if (!idItem) {
      errors.idItem = "Mã sản phẩm không được bỏ trống"
    }
    if (!nameItem) {
      errors.nameItem = "Tên sản phẩm không được bỏ trống"
    }
    if (!priceItem || priceItem === 0) {
      errors.priceItem = "Giá sản phẩm lớn hơn 0"
    }
    return errors;
  }

  function onSubmit(values) {
    //send values to function in App.js
    let action = isUpdating ? "updating" : "adding";
    props.onSaveClick(action, values);
  }

  return (
    <div className="form">
      <h4 className="title-form">Thông tin sản phẩm</h4>
      <Form
        onSubmit={onSubmit}
        validate={validateForm}
        initialValues={item}
        render={({ handleSubmit, form }) => {
          _form = { ...form }
          return (
            <form onSubmit={handleSubmit}>
              <FieldItem type="text" name="idItem" label="Mã sản phẩm" _readOnly={isUpdating} />
              <FieldItem type="text" name="nameItem" label="Tên sản phẩm" />
              <FieldItem type="number" name="priceItem" label="Giá" />
              <FieldItem type="text" name="noteItem" label="Ghi chú" />

              <div className="buttons">
                <Button type="submit" >
                  {isUpdating ? "Cập nhật" : "Thêm mới"}
                </Button>
                <img alt="Reset"
                  onClick={() => setReset(true)}
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/refresh-387-370816.png" />
              </div>
            </form>
          )
        }}
      />
    </div>
  )
})

export default FinalForm;