import React from "react";
import classnames from "classnames";

export default ({ type, placeholder, name, value, onChange, errors }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={classnames("form-control", {
          "is-invalid": errors
        })}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};
