import React, { useState } from "react";
import { AppBar, Toolbar, Button, Dialog, Typography, List, ListItem, ListItemText, DialogContent, DialogActions } from "@material-ui/core";
import { Logo } from "../utils/vars";

export default function TopNavigation() {
  const [isOpen, setOpen] = useState(false);
  return (
    <AppBar color="default" position="sticky" style={{ backgroundColor: "#e1f0f0" }}>
      <Toolbar>
        <img src={Logo} height={55} alt="" />
        <div style={{ marginLeft: "auto" }}>
          <Button onClick={() => setOpen(true)}>Sign up to become a driver</Button>
        </div>
      </Toolbar>
      <Dialog open={isOpen} onClose={() => setOpen(false)}>
        <DialogContent>
          <Typography variant="body1">
            Send the following information to <span style={{ fontWeight: 700 }}>jonas.groendahlxd@gmail.com</span>:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Personal information" secondary="Name, address, year born, etc." />
            </ListItem>
            <ListItem>
              <ListItemText primary="All relevant driving experience" secondary="Assets that prove your skills." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cover letter" secondary="Explanation of why you'd like to become a driver at Jubi" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Photo" secondary="A newly shot photograph of you" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Car information" secondary="All relevant car information such as brand, km rode, color, current state" />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close this window</Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}
