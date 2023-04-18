import React from "react";
import { Link } from "react-router-dom";
import LaptopIcon from "@mui/icons-material/Laptop";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import style from "./Home.module.css";
import foto from "./home3.jpg";

const Home = () => {
  return (
    <div className={style.bloque}>
      <div className={style.container}>
        <Typography variant='h3' component='h3' sx={{ color: "#EAE7EC" }}>
          Hello I´m
        </Typography>
        <Typography
          variant='h1'
          component='h1'
          sx={{
            marginTop: 2,
            fontFamily: "futara",
            color: "#6b42b6",
            textShadow: "6px 6px 8px #666",
          }}>
          <span style={{ fontWeight: "bold" }}>Nicolás Bouvet</span>
        </Typography>
        <Typography
          variant='h5'
          component='h5'
          sx={{ marginTop: 3, color: "#EAE7EC" }}>
          A fullstack developer oriented towards the front end and web design
          side.
        </Typography>
        <Typography
          variant='h4'
          component='h4'
          sx={{ marginTop: 5, color: "#EAE7EC" }}>
          Welcome!
        </Typography>
        <Link to='./projects' style={{ textDecoration: "none" }}>
          <Button
            variant=''
            sx={{
              marginTop: 7,
              scale: "1.2",
              color: "#EAE7EC",
              backgroundColor: "#6b42b6",
            }}
            className={style.boton}>
            Projects <LaptopIcon />
          </Button>
        </Link>
      </div>
      <div className={style.container2}>
        <img
          src={foto}
          alt='foto1'
          style={{
            boxShadow: "0px 0px 10px 2px rgba(180, 180, 180, 0.5)",
            borderRadius: "5%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
