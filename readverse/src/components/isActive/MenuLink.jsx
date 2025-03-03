import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuLink = ({to, label}) => {

return(
    <NavLink 
        to={to}
        className={({isActive}) => ` header-link-navbar ${isActive ? "enabled-link" : "disabled-link"}`}    
        >
        {label}
    </NavLink>

)
}
export default MenuLink;