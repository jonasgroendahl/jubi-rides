import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Dialog,
  Typography,
  List,
  ListItem,
  ListItemText,
  DialogContent,
  DialogActions,
  Menu,
  MenuItem
} from "@material-ui/core";
import { Logo } from "../utils/vars";

import dk from "../assets/flags/dk.svg";
import uk from "../assets/flags/uk.svg";

const FLAG_HEIGHT = 30;

export default function TopNavigation({ lang = "uk", onChange, $ }) {
  const [isOpen, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(langCode) {
    onChange(langCode);
    setAnchorEl(null);
  }

  return (
    <AppBar color="default" position="sticky" style={{ backgroundColor: "#e1f0f0" }}>
      <Toolbar>
        <img src={Logo} height={55} alt="" />
        <div style={{ marginLeft: "auto" }}>
          <Button onClick={e => setAnchorEl(e.currentTarget)}>
            <img src={lang === "dk" ? dk : uk} height={FLAG_HEIGHT} alt={lang === "dk" ? "Danish" : "English"} />
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => handleClick("uk")}>
              <img src={uk} height={FLAG_HEIGHT} alt="English" />
            </MenuItem>
            <MenuItem onClick={() => handleClick("dk")}>
              <img src={dk} height={FLAG_HEIGHT} alt="Danish" />
            </MenuItem>
          </Menu>
          <Button onClick={() => setOpen(true)}>{$.topNavBtn}</Button>
        </div>
      </Toolbar>
      <Dialog open={isOpen} onClose={() => setOpen(false)}>
        <DialogContent>
          <Typography variant="body1">
            {$.dialogTitle} <span style={{ fontWeight: 700 }}>jonas.groendahlxd@gmail.com</span>:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary={$.dialogListItem1p} secondary={$.dialogListItem1s} />
            </ListItem>
            <ListItem>
              <ListItemText primary={$.dialogListItem2p} secondary={$.dialogListItem2s} />
            </ListItem>
            <ListItem>
              <ListItemText primary={$.dialogListItem3p} secondary={$.dialogListItem3s} />
            </ListItem>
            <ListItem>
              <ListItemText primary={$.dialogListItem4p} secondary={$.dialogListItem4s} />
            </ListItem>
            <ListItem>
              <ListItemText primary={$.dialogListItem5p} secondary={$.dialogListItem5s} />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>{$.dialogBtn}</Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}
