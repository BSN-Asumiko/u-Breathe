import React from "react";

const FormInput = ({ id, label, register, requiredMessage, error }) => {
  return (
    <div className="formGroup">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...register(id, { required: requiredMessage })} />
      {error && <div className="popup">{error.message}</div>}
    </div>
  );
};

export default FormInput;
