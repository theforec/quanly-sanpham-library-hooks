import React, { Component } from 'react';
import { Field } from 'react-final-form';
import { Input, InputNumber } from 'rsuite';

export default class FieldItem extends Component {
  TextFieldItem = ({ input, meta, ...rest }) => {
    const { _readOnly } = this.props;
    return (
      <div>
        <Input
          {...rest}
          {...input}
          errortext={meta.touched ? meta.error : ''}
          disabled={input.name === "idItem" && _readOnly}
        />
        {meta.error && meta.touched && <span className="error">&times; {meta.error}</span>}
      </div>
    )
  }

  NumberFieldItem = ({ input, meta, ...rest }) => {
    return (
      <div>
        <InputNumber
          {...rest}
          {...input}
          postfix="vnđ"
          step={1000000}
          errortext={meta.touched ? meta.error : ''}
        />
        {meta.error && meta.touched && <span className="error">&times; {meta.error}</span>}
      </div>
    )
  }

  render() {
    const { label, name, type } = this.props;
    return (
      <div className="field">
        <label>{label}</label>
        <Field
          name={name}
          component={type === "text" ? this.TextFieldItem : this.NumberFieldItem}
        />
      </div>
    )
  }
}
