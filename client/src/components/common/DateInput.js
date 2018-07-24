import React from "react";
import classnames from "classnames";

export default ({ type, placeholder, name, value, onChange, errors, info }) => {
  return (
    <div className="row">
      <div className="col-sm">
        <label>Live Date</label>
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
      </div>

      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};
