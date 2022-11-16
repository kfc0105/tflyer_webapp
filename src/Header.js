import { AppBar, Toolbar, Typography, Button, Box, IconButton} from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import { Link as RouterLink} from "react-router-dom"

//It should typically be obtained with API but this is to make it simple for now
const headersData = [
    {
      label: "サービス",
      href: "/services",
    },
    {
      label: "OUR GOAL",
      href: "/goal",
    },
    {
      label: "CONTACT",
      href: "/contact",
    },
    {
      label: "ABOUT",
      href: "/about",
    },
  ];

export default function Header() {
    //const { menuButton } = useStyles();

    //position menue button to the right with <div>
    //Not working
    const displayDesktop = () => {
      return <Toolbar>
        {tflyerLogo}
        <div>{getMenuButtons()}</div>
        </Toolbar>;
    };
    
    //Not working
    const tflyerLogo = (
      <Typography variant="h6" component="h1" align='left'>
        合同会社T-flyer
      </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
                {...{
                    key: label,
                    color: "inherit",
                    to: href,
                    component: RouterLink,
                }}
                >
                {label}
            </Button>
          );
        });
      };
  
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }} align='left'>
                    合同会社T-flyer
                </Typography>
                {getMenuButtons()}
                </Toolbar>
            </AppBar>
        </Box>
    );
  }