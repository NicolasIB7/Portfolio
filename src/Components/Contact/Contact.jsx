import React from "react";
import { useState, useEffect } from "react";
import resume from "./CV-BouvetNicolás.pdf";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import { style } from "@mui/system";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Nicolás-Bouvet-Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className={styles.bloque}>
      <div className={styles.container2}>
        <img
          src='https://aspoonfulofsugarblog.com/wp-content/uploads/2015/09/Contact-me-11-940x518.jpg'
          alt=''
          style={{
            width: "100%",
            borderRadius: 10,
            boxShadow: "0px 0px 10px 2px rgba(180, 180, 180, 0.5)",
          }}
        />
      </div>
      <div className={styles.container}>
        <Typography
          variant='h2'
          component='h2'
          marked='center'
          sx={{
            marginBottom: 5,
            color: "#EAE7EC",
            textShadow: "6px 6px 8px #666",
          }}>
          Contact me
        </Typography>
        <Typography variant='h5' component='h5' sx={{ color: "#EAE7EC" }}>
          I am available in almost all social contact networks. If you have any
          concerns, don't hesitate to ask.
        </Typography>
        <Typography
          variant='h5'
          component='h5'
          sx={{ marginTop: 4, color: "#EAE7EC" }}>
          Let's talk!
        </Typography>

        <div className={styles.iconos}>
          <a
            href='https://www.linkedin.com/in/nicolasbouvet7'
            target='_blank'
            rel='noreferrer'
            style={{ color: "#6b42b6" }}>
            <LinkedInIcon sx={{ marginRight: 1 }} />
          </a>
          <a
            href='https://www.instagram.com/nicobouvet7'
            target='_blank'
            rel='noreferrer'
            style={{ color: "#6b42b6" }}>
            <InstagramIcon sx={{ marginRight: 1 }} />
          </a>
          <a
            href='https://github.com/NicolasIB7'
            target='_blank'
            rel='noreferrer'
            style={{ color: "#6b42b6" }}>
            <GitHubIcon sx={{ marginRight: 1 }} />
          </a>
          <a
            href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJGBccjrLwZHkZVhtRRsbqkxjJwVNktQHkKBvCBZZgZCMrJlxKbwMwwCMPfhPvLwWJpsV'
            target='_blank'
            rel='noreferrer'
            style={{ color: "#6b42b6" }}>
            <EmailIcon sx={{ marginRight: 1 }} />
          </a>
        </div>

        <Button
          variant='outlined'
          onClick={handleDownload}
          disabled={downloading}
          sx={{ color: "white", border: "solid", marginTop: 1 }}>
          {downloading ? "Downloading..." : "Download Resume"}
        </Button>
      </div>
    </div>
  );
};

export default Contact;
