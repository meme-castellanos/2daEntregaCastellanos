import React from "react";

const NavItems = (nav) => {
  return (
    <div>
      <li className="nav-item">
        <button className="nav-link active" style={{backgroundColor:"transparent" , color:"whitesmoke" , border:"none"}} aria-current="page">
        {nav.navItem}
        </button>
      </li>
    </div>
  );
};

export default NavItems;
