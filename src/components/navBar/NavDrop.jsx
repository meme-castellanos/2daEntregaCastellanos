import React from "react";

const NavDrop = (drop) => {
  return (
    <div>
      <li>
        <button className="dropdown-item btn btn-outline-secondary" type="button">{drop.categoria}</button>
      </li>
    </div>
  );
};

export default NavDrop;
