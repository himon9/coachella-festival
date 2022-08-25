import React, {useState,useEffect} from "react";
import { AppBar, Toolbar,  IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SideDrawer'
const Header = () => {

    const [drawerOpen,setDrawerOpen]=useState(false)
    const [headerShow,setHeaderShow]=useState(false)

    const toggleDrawer = ( value ) => {
        setDrawerOpen(value)
    }

    const handleScroll = () => {
        if ( window.scrollY > 0) {
            setHeaderShow(true)
        } else {
            setHeaderShow(false)
        }   

       
    }
    useEffect(()=>{  //As soon the app starts
        window.addEventListener('scroll',handleScroll)
    },[])//[]-->dependency list 


    return (
        <AppBar 
            position="fixed"
            style={{backgroundColor:headerShow?'#2f2f2f':'transparent',
            boxShadow: 'none',
            padding: '10px 0px'
            }}
        >
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">Coachella Festival</div>
                    <div className="header_logo_title">Musical Events</div>
                </div>

            <IconButton
                aria-label="Menu"
                color="inherit"
                onClick={()=>toggleDrawer(true)}
            >
                <MenuIcon/>

            </IconButton>
            <SideDrawer 
                open={drawerOpen}
                onClose={(value)=>toggleDrawer(value)}
            />
            </Toolbar>

            

        </AppBar>
    )
}

export default Header