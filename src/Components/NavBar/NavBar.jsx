import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={style.nav}>
      <div>
        <NavLink to='/'>
          <Avatar
            alt='Nicolas Bouvet'
            src='https://img.freepik.com/vector-premium/diseno-logotipo-nb-letra-vinculada-inicial-vector-diseno-logotipo-nb-letra-moderna-moda-moderna_754537-559.jpg?w=2000'
            sx={{ width: 86, height: 86, marginTop: 2, marginLeft: 2 }}
          />
        </NavLink>
      </div>

      <div className={style.links}>
        <Typography variant='h5' component='h5' sx={{ fontWeight: "bold" }}>
          <NavLink to='/' className={style.link}>
            Home
          </NavLink>
        </Typography>
        <Typography variant='h5' component='h5' sx={{ fontWeight: "bold" }}>
          <NavLink to='/projects' className={style.link}>
            Projects
          </NavLink>
        </Typography>
        <Typography variant='h5' component='h5' sx={{ fontWeight: "bold" }}>
          <NavLink to='/about' className={style.link}>
            About
          </NavLink>
        </Typography>
        <Typography variant='h5' component='h5' sx={{ fontWeight: "bold" }}>
          <NavLink to='/contact' className={style.link}>
            Contact
          </NavLink>
        </Typography>
      </div>
      <div className={style.linksresponsive}>
        <PopupState
          variant='popover'
          popupId='demo-popup-menu'
          sx={{ backgroundColor: "black" }}>
          {(popupState) => (
            <React.Fragment>
              <Button
                {...bindTrigger(popupState)}
                sx={{ backgroundColor: "black" }}>
                <MenuIcon />
              </Button>
              <Menu {...bindMenu(popupState)}>
                <NavLink
                  to='/'
                  style={{ textDecoration: "none", color: "black" }}>
                  <MenuItem onClick={popupState.close}>Home</MenuItem>
                </NavLink>
                <NavLink
                  to='/projects'
                  style={{ textDecoration: "none", color: "black" }}>
                  <MenuItem onClick={popupState.close}>Projects</MenuItem>
                </NavLink>
                <NavLink
                  to='/about'
                  style={{ textDecoration: "none", color: "black" }}>
                  <MenuItem onClick={popupState.close}>About</MenuItem>
                </NavLink>
                <NavLink
                  to='/contact'
                  style={{ textDecoration: "none", color: "black" }}>
                  <MenuItem onClick={popupState.close}>Contact</MenuItem>
                </NavLink>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </div>
  );
};

export default NavBar;
