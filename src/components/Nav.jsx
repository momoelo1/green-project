import { Link } from "react-router-dom";
import { Container, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, blue } from "@mui/material/colors";

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

const Nav = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <AppBar
          
          elevation={0}
          position="relative"
        >
          <Toolbar className="toolBar">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Button sx={{ m: 5 }} color="secondary" LinkComponent={Link} to="/">
              Home
            </Button>
            <Button
              sx={{ m: 5 }}
              color="secondary"
              LinkComponent={Link}
              to="/products"
            >
              Prodotti
            </Button>
            <Button sx={{ m: 5 }} color="secondary" LinkComponent={Link} to="#">
              Contatti
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Container>
  );
};

export default Nav;
