import React from "react";
import { Typography } from "@mui/material";
import style from "./About.module.css";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Stack } from "@mui/material";
import { Divider } from "@mui/material";
import foto from "../wall.jpg";

const About = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className={style.bloque}>
      <div className={style.container2}>
        <img
          src={foto}
          alt='about'
          style={{ borderRadius: "5%" }}
          className={style.fondo}
        />
      </div>
      <div className={style.container}>
        <Typography
          marked='center'
          align='center'
          variant='h2'
          component='h2'
          sx={{ color: "#EAE7EC", textShadow: "6px 6px 8px #666" }}>
          About me
        </Typography>
        <Typography
          variant='h5'
          component='h5'
          sx={{ marginTop: 3, color: "#EAE7EC" }}>
          My name is Nicolás, I'm 26 years old and I'm a fullstack developer, I
          decided to lean towards the backend end side so I'm currently
          perfecting myself even more in technologies like python, security,
          auth. I am also an advanced student of mechanical engineering and a
          year ago I decided to change the course of my working life towards web
          development but always trying to complement the skills and knowledge
          of the two areas. I am a person with enthusiasm and supporter of
          continuous learning.
          <Divider
            sx={{ marginTop: 3, backgroundColor: "#C08C3C", height: 2 }}
          />
        </Typography>

        <Typography
          variant='h4'
          component='h4'
          sx={{
            marginTop: 5,
            color: "#EAE7EC",
            textShadow: "6px 6px 8px #666",
          }}>
          Skills
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "50px",
            justifyContent: "center",
            marginTop: "30px",
          }}>
          <a href='https://www.w3.org/html/' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
              alt='html5'
              width='75'
              height='75'
            />
          </a>
          <a
            href='https://www.w3schools.com/css/'
            target='_blank'
            rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
              alt='css3'
              width='75'
              height='75'
            />
          </a>
          <a href='https://sass-lang.com' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'
              alt='sass'
              width='75'
              height='75'
            />
          </a>
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            target='_blank'
            rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
              alt='javascript'
              width='75'
              height='75'
            />
          </a>
          <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
              alt='react'
              width='75'
              height='75'
            />
          </a>
          <a href='https://redux.js.org' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg'
              alt='redux'
              width='75'
              height='75'
            />
          </a>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "50px",
            justifyContent: "center",
            marginTop: "25px",
          }}>
          <a
            href='https://www.typescriptlang.org/'
            target='_blank'
            rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
              alt='typescript'
              width='75'
              height='75'
            />
          </a>
          <a href='https://nodejs.org' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
              alt='nodejs'
              width='75'
              height='75'
            />
          </a>
          <a href='https://expressjs.com' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg'
              alt='express'
              width='75'
              height='75'
            />
          </a>
          <a href='https://www.postgresql.org' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg'
              alt='postgresql'
              width='75'
              height='75'
            />
          </a>
          <a href='https://www.mongodb.com/' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
              alt='mongodb'
              width='75'
              height='75'
            />
          </a>
          <a
            href='https://firebase.google.com/'
            target='_blank'
            rel='noreferrer'>
            <img
              src='https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
              alt='firebase'
              width='75'
              height='75'
            />
          </a>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "50px",
            justifyContent: "center",
            marginTop: "25px",
          }}>
          <a href='https://www.docker.com/' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg'
              alt='docker'
              width='75'
              height='75'
            />
          </a>
          <a href='https://www.python.org' target='_blank' rel='noreferrer'>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
              alt='python'
              width='75'
              height='75'
            />
          </a>
          <a href='https://jestjs.io' target='_blank' rel='noreferrer'>
            <img
              src='https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg'
              alt='jest'
              width='75'
              height='75'
            />
          </a>
          <a href='https://git-scm.com/' target='_blank' rel='noreferrer'>
            <img
              src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
              alt='git'
              width='75'
              height='75'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
