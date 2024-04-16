import React from "react";

import EditIcon from "../../assets/edit-pen-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";

const Icons = {
  EditIcon,
  DeleteIcon,
};

export default ({ name, props }) => {
  if (Icons[name]) {
    return (
      <img
        {...props}
        src={Icons[name]}
        alt="Your SVG"
        style={{ maxWidth: 18, maxHeight: 18 }}
      />
    );
  }

  return null;
};
