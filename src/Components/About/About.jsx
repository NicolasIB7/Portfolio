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
          decided to lean towards the front end so I'm currently perfecting
          myself even more in technologies like react and typescript. I am also
          an advanced student of mechanical engineering and a year ago I decided
          to change the course of my working life towards web development but
          always trying to complement the skills and knowledge of the two areas.
          I am a person with enthusiasm and supporter of continuous learning.
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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Stack direction='row' sx={{ display: "inline-block", margin: 5 }}>
            <Item
              variant='contained'
              sx={{
                marginBottom: 3,
                color: "black",
                scale: "1.2",
                fontWeight: "bold",
              }}>
              Html
            </Item>
            <Item
              size='small'
              variant='contained'
              sx={{
                marginBottom: 3,
                color: "black",
                scale: "1.2",
                fontWeight: "bold",
              }}>
              Css
            </Item>
            <Item
              size='small'
              variant='contained'
              sx={{
                marginBottom: 3,
                color: "black",
                scale: "1.2",
                fontWeight: "bold",
              }}>
              Javascript
            </Item>
          </Stack>
          <Stack direction='row' sx={{ display: "inline-block", margin: 5 }}>
            <Item
              size='small'
              variant='contained'
              sx={{
                marginBottom: 3,
                color: "black",
                scale: "1.2",
                fontWeight: "bold",
              }}>
              ReactJs
            </Item>
            <Item
              size='small'
              variant='contained'
              sx={{
                marginBottom: 3,
                color: "black",
                scale: "1.2",
                fontWeight: "bold",
              }}>
              Redux
            </Item>
            <Item
              size='small'
              variant='contained'
              sx={{
                marginBottom: 3,
                color: "black",
                scale: "1.2",
                fontWeight: "bold",
              }}>
              Typescript
            </Item>
          </Stack>
          <Stack direction='row' sx={{ display: "inline-block", margin: 5 }}>
            <Item
              size='small'
              variant='contained'
              sx={{
                marginBottom: 3,
                color: "black",
                scale: "1.2",
                fontWeight: "bold",
              }}>
              NodeJs
            </Item>
            <Item
              size='small'
              variant='contained'
              sx={{
                marginBottom: 3,
                color: "black",
                scale: "1.2",
                fontWeight: "bold",
              }}>
              Express
            </Item>
            <Item
              size='small'
              variant='contained'
              sx={{
                marginBottom: 3,
                color: "black",
                scale: "1.2",
                fontWeight: "bold",
              }}>
              SQL
            </Item>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default About;
