import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { Link as RouterLink } from 'react-router-dom';

function ListItemLink(props) {
  const { to, open, ...other } = props;
  let icon = null;
  if (open != null) {
    icon = open ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />;
  }

  return (
    <li>
      <ListItem
        button
        component={RouterLink}
        to={to}
        {...other}
        sx={{ fontWeight: 700 }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FormatListBulletedOutlinedIcon />
          <div style={{ marginLeft: 12 }}>Tarefas</div>
          <div style={{ marginLeft: 112 }}>{icon}</div>
        </div>
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default function RouterBreadcrumbs() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          fontWeight: 600,
          fontFamily: 'sans-serif',
        }}
      >
        <Box
          sx={{
            mt: 1,
          }}
          component="nav"
          aria-label="mailbox folders"
        >
          <List>
            <ListItemLink to="/home" open={open} onClick={handleClick} />
            <Collapse component="li" in={open} timeout="auto" unmountOnExit>
              <List disablePadding>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 250,
                    padding: 6,
                  }}
                >
                  <ListItem
                    button
                    component={RouterLink}
                    to="/tarefas/pendente"
                    sx={{ pl: 5 }}
                  >
                    <PendingOutlinedIcon />
                    <div style={{ marginLeft: 12 }}>Pendente</div>
                  </ListItem>
                  <KeyboardArrowRightOutlinedIcon />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 250,
                    padding: 6,
                  }}
                >
                  <ListItem
                    button
                    component={RouterLink}
                    to="/tarefas/processo"
                    sx={{ pl: 5 }}
                  >
                    <CachedOutlinedIcon />
                    <div style={{ marginLeft: 12 }}>Em processo</div>
                  </ListItem>
                  <KeyboardArrowRightOutlinedIcon />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 250,
                    padding: 6,
                  }}
                >
                  <ListItem
                    button
                    component={RouterLink}
                    to="/tarefas/concluido"
                    sx={{ pl: 5 }}
                  >
                    <CheckCircleOutlineOutlinedIcon />
                    <div style={{ marginLeft: 12 }}>Concluído</div>
                  </ListItem>
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </List>
            </Collapse>
          </List>
        </Box>
      </Box>
    </>
  );
}
