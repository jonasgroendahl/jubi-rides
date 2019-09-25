import React, { useState } from "react";
import TopNavigation from "./components/TopNavigation";
import { MuiThemeProvider, Grid, Typography, List, ListItem, ListItemText, ListItemIcon, Toolbar, CssBaseline } from "@material-ui/core";
import { DirectionsCar, Smartphone, Money } from "@material-ui/icons";
import theme from "./utils/theme";
import LangFile from "./utils/LangFile";

import requestRideImg from "./assets/phone-mockup-request-ride.png";
import stores from "./assets/stores.png";

function App() {
  const [lang, setLang] = useState("uk");

  const $ = LangFile[lang];

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <TopNavigation lang={lang} onChange={setLang} $={$} />
        <main>
          <Grid container>
            <Grid item sm={6} xs={12}>
              <img src={requestRideImg} width="100%" alt="App mobile" />
            </Grid>
            <Grid item sm={6} xs={12} style={{ marginTop: 30 }}>
              <Typography variant="h5" style={{ fontWeight: "bold" }} gutterBottom>
                {$.headline}
              </Typography>
              <Typography variant="body2">{$.listHeader}</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DirectionsCar />
                  </ListItemIcon>
                  <ListItemText primary={$.listItem1p} secondary={$.listItem1s} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Smartphone />
                  </ListItemIcon>
                  <ListItemText primary={$.listItem2p} secondary={$.listItem2s} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Money />
                  </ListItemIcon>
                  <ListItemText primary={$.listItem3p} secondary={$.listItem3s} />
                </ListItem>
              </List>
              <Typography variant="body1" style={{ marginTop: 20 }}>
                {$.soon}
              </Typography>
              <img src={stores} alt="Google play and apple app store" height={50} style={{ marginTop: 15, display: "block" }} />
            </Grid>
          </Grid>
        </main>
        <footer>
          <Toolbar>
            <Typography variant="caption">Jubi Rides</Typography>
            <div className="footer-info">
              <Typography variant="caption">CVR: 40806326</Typography>
              <Typography variant="caption">{$.contact} jonas.groendahlxd@gmail.com</Typography>
            </div>
          </Toolbar>
        </footer>
        <CssBaseline />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
