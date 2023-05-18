import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../Typography";
import { redirect } from "react-router-dom";
import style from "./Project.module.css";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://www.masterspublichealth.net/wp-content/uploads/2020/04/How-Do-You-Become-a-Medical-and-Health-Services-Manager-1024x428.jpg",
    title: "Medical service",
    width: "50%",
    redirect: "https://pf-grupo-2.vercel.app/",
  },
  {
    url: "https://i.postimg.cc/jqZSY8jV/Servicio-comidas.png",
    title: "Food service",
    width: "50%",
    redirect: "https://pi-foods-steel.vercel.app/",
  },
  {
    url: "https://i.postimg.cc/J7sQ5RFG/Captura-de-pantalla-2023-05-18-185251.png",
    title: "Ecommerce Fit-boost",
    width: "50%",
    redirect: "https://ecommerce-fit-boost.vercel.app/",
  },
  {
    url: "https://fondosmil.com/fondo/4030.jpg",
    title: "Routine gym",
    width: "50%",
    redirect: "https://routine-gym.vercel.app/",
  },
  {
    url: "https://i.postimg.cc/SRq21jVW/Movie-seracher.png",
    title: "Movie searcher",
    width: "50%",
    redirect: "https://movies-searcher-flame.vercel.app/",
  },
  {
    url: "https://i.postimg.cc/Bv0CfZhn/Captura-de-pantalla-2023-04-01-202823.png",
    title: "Make-up",
    width: "50%",
    redirect: "https://agus-mac.vercel.app/index.html",
  },
  {
    url: "https://i.pinimg.com/originals/31/66/f6/3166f6544e77a1f514890e459e44002e.jpg",
    title: "Rick & Morty",
    width: "50%",
    redirect: "https://rick-morty-plum.vercel.app/",
  },
  
  {
    url: "https://i.postimg.cc/0yxsKDNd/summary-square.jpg",
    title: "Simil starbucks",
    width: "50%",
    redirect: "https://simil-starbucks.vercel.app/",
  },
  
  {
    url: "https://jobint.hiringroom.com/data/accounts/jobint/microsite/3c234737a37f03fe546aa86e7e116883.png",
    title: "Simil Jobint page",
    width: "50%",
    redirect: "https://job-65sl7fdb7-nicolasib7.vercel.app/",
  },
];

export default function Projects() {
  return (
    <Container component='section' sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant='h2'
        marked='center'
        align='center'
        component='h2'
        className={style.titulo}>
        Projects
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className='imageBackdrop' />
            <a href={image.redirect} target='_blank' rel='noopener noreferrer'>
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "common.white",
                }}>
                <Typography
                  component='h3'
                  variant='h6'
                  color='inherit'
                  className='imageTitle'>
                  {image.title}
                  <br />
                  <div className='imageMarked' />
                </Typography>
              </Box>
            </a>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
