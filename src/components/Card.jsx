import React from "react";
import "./card.css";
import { Box, Container, Typography } from "@mui/material";
import IconList from "./IconList";
import ButtonList from "./ButtonList";

const Card = () => {
  return (
    <Container sx={{display:"flex", flexDirection:"column",justifyContent: "space-between", gap:"20px"}}>
      <div className="card">
        <img id="profilePicture" src="../../public/pp.jpg" alt="profile picture" />

        <p className="cardTitle">
          Yahya Ilham Riyadi
        </p>

        <p className="cardSubTitle">
          Programmer | Web Developer
        </p>

        <IconList />

        <ButtonList />

      </div>
    </Container>
  );
};

export default Card;
