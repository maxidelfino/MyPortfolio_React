import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerBtn from "./BurgerBtn";
import menuItems from "./MenuItems";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
      setClicked(!clicked)
  }
  return (
    <>
      <nav className="nav">
        {/* <Link to='/'> */}
        <div className="nav-logo">
          <p>MaxiDelfino</p>
        </div>
        {/* </Link> */}
        <BurgerBtn clicked={clicked} handleClick={handleClick}/>
        <div className={`nav-links ${clicked ? 'isOpen' : 'isClosed' }`}>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  {/* <Link to={item.id}> */}

                  <p className={item.cName}>{item.title}</p>
                  {/* </Link> */}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
