
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';


const NavBar = () => {
  return (
    <div className={style.nav}>
      <div>
        <Avatar
          alt="Nicolas Bouvet"
          src="https://img.freepik.com/vector-premium/diseno-logotipo-nb-letra-vinculada-inicial-vector-diseno-logotipo-nb-letra-moderna-moda-moderna_754537-559.jpg?w=2000"
          sx={{ width: 86, height: 86, marginTop:2, marginLeft:2 }}
        />
      </div>

      <div className={style.links}>
        <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
          <NavLink  to="/"  className={style.link}>
            Home
          </NavLink>
        </Typography>
        <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
          <NavLink  to="/projects"   className={style.link}>
            Projects
          </NavLink>
        </Typography>
        <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
          <NavLink  to="/about"   className={style.link}>
            About
          </NavLink>
        </Typography>
        <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
          <NavLink  to="/contact"   className={style.link}>
            Contact
          </NavLink>
        </Typography>
      </div>
    </div>
  );
};

export default NavBar;

