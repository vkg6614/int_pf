import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../App.css";

let menuLists = [
  "Create a quote",
  "Quotes",
  "Policies",
  "Clients",
  "Entity",
  "Users",
  "Configuration",
  "Product builder",
];

const AdminMenu = () => {
  const [isActive, setIsActive] = useState(null);
  const [isActiveFirst, setIsActiveFirst] = useState(true);

  const hadleMenuListControl = (item, index) => {
    setIsActiveFirst(false);
    setIsActive(item);
  };
  return (
    <>
      <Outlet />
      <div
        style={{
          position: "fixed",
          top: 0,
          // width: "14%",
        }}
        className="menu_container left_side"
      >
        <div className="logo_container">
          <span className="main_logo">INT Origin</span>
          <hr class="hr-dashed hr-menu" />
        </div>
        <ul>
          {menuLists.map((item, index) => (
            <li
              key={index + 1}
              onClick={() => hadleMenuListControl(item, index)}
              className={`${isActive === item && "active"}`}
              style={
                isActiveFirst === true && index === 0
                  ? // ? { backgroundColor: "#1e1f57" }
                    {}
                  : null
              }
            >
              <NavLink
                to={
                  index === 0
                    ? `/api`
                    : index === 1
                    ? `/api/quotes`
                    : index === 2
                    ? "/api/policies"
                    : index === 3
                    ? "/api/clients"
                    : index === 4
                    ? "/api/entity"
                    : index === 5
                    ? "/api/users"
                    : index === 6
                    ? "/api/configuration"
                    : index === 7
                    ? "/api/product_builder"
                    : "api"
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminMenu;
