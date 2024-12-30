import MiddlePageInfo from "./components/MiddlePageInfo";
import ProductsContainer from "./components/ProductsContainer";
import greenLogo from "./images/greenLogoModified.png";
import { Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, blue } from "@mui/material/colors";
import { Container } from "@mui/material";
import NET from "vanta/src/vanta.net";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";

const theme = createTheme({
  spacing: 2,
  palette: {
    primary: {
      light: teal[300],
      main: teal[200],
      dark: teal[700],
      darker: teal[900],
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      darker: blue[900],
    },
  },
});

const App = () => {
  useEffect(() => {
    NET({
      el: "#root",
      mouseControls: false,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 500.0,
      scale: 1.0,
      scaleMobile: 1.0,
      zoom: 20.0,
      maxDistance: 20.0,
      spacing: 20,
      color: 0xacefaa,
      backgroundColor: 0x70f54,
    });
  }, []);

  return (
    <div className="container">
      <Container>
        <div className="logoImgDiv">
          <img className="logoImg" src={greenLogo} alt="logo" />
        </div>
        <Nav />
      </Container>
      <Routes>
        <Route exact path="/" element={<MiddlePageInfo />} />
        <Route exact path="/products" element={<ProductsContainer />} />
      </Routes>
    </div>
  );
};

export default App;
