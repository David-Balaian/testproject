// CustomInput.js
import React from "react";
import TextField from "@material-ui/core/TextField";

const MUInput = ({ label, value, onChange, variant = "outlined" }) => {
  return (
    <TextField
      label={label}
      variant={variant}
      fullWidth
      value={value}
      onChange={onChange}
    />
  );
};

export default MUInput;
