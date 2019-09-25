import React from "react";
import TopNavigation from "./components/TopNavigation";
import { MuiThemeProvider, Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { DirectionsCar, Smartphone, Money } from "@material-ui/icons";
import theme from "./utils/theme";

import requestRideImg from "./assets/phone-mockup-request-ride.png";
import stores from "./assets/stores.png";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <TopNavigation />
        <main>
          <Grid container>
            <Grid item sm={6} xs={12}>
              <img src={requestRideImg} width="100%" alt="App mobile" />
            </Grid>
            <Grid item sm={6} xs={12} style={{ marginTop: 30 }}>
              <Typography variant="h5" style={{ fontWeight: "bold" }} gutterBottom>
                Tired of all the drawbacks of the Danish taxi system but need a ride?
              </Typography>
              <Typography variant="body2">With Jubi Rides you are guaranteed:</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DirectionsCar />
                  </ListItemIcon>
                  <ListItemText primary="Experienced and skilled drivers." secondary="Only riders with past experience are allowed to sign-up." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Smartphone />
                  </ListItemIcon>
                  <ListItemText primary="Convenient." secondary="Look for rides using the mobile App." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Money />
                  </ListItemIcon>
                  <ListItemText primary="Low cost. Affordable." secondary="Know the final price when selecting your ride." />
                </ListItem>
              </List>
              <Typography variant="body1" style={{ marginTop: 20 }}>
                Soon available in a city near you in Denmark and in the Google Play Store and Apple App store.
              </Typography>
              <img src={stores} alt="Google play and apple app store" height={50} style={{ marginTop: 15, display: "block" }} />
              <Typography variant="caption">Predicted launch 2020 Q1</Typography>
            </Grid>
          </Grid>
        </main>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
