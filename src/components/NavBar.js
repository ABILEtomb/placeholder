import React, { useState } from "react";
import { AppBar,Toolbar,IconButton, Typography,List,ListItem,Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from "./SideBar";
import { Link } from "react-router-dom";


 export function NavBar() {
    const [open, setopen] = useState(false);
    return(
        <div className="NavBar">
        <AppBar position="fixed"  sx={{
        width:{
        xs:"100%",
        sm:"100%",
        lg:"100%"
        },
          backgroundColor:"#1a237e"
        
   }}>
    <Toolbar>
    <Link to={'/'} className="link" >
      <Typography>
        R,R and J 
      </Typography>
       </Link>
      <List  sx={{
         display:{
        xs:"none",
        md:"flex"
      },
      marginLeft:"auto"
    
      }}>
 
        <ListItem color="error" >
        <Link to={'/Albums'} className="link" >
            Albums
            </Link>
        </ListItem>
       
  
        <ListItem>
        <Link to={'/Comment'} className="link">
           Comments
           </Link>
        </ListItem>
      
    
        <ListItem>
        <Link to={'/Photos'} className="link">
           Photos
           </Link>
        </ListItem>
     
    
        <ListItem>
        <Link to={'/Posts'} className="link">
         Posts
         </Link>
        </ListItem>
        <ListItem>
        <Link to={'/Todos'} className="link">
           Todos
           </Link>
        </ListItem>

        <ListItem>
        <Link to={'/Users'} className="link">
          Users
          </Link>
        </ListItem>

        <ListItem>
        <Link to="https://github.com/ABILEtomb/placeholder.git" className='link'>
          <Button variant="contained">
            Github
          </Button>
          </Link>
        </ListItem>
      </List>
      <IconButton sx={{marginLeft:"auto",
      display:{
        xs:"flex",
        md:"none"
      }
      }} onClick={() => setopen(true)}>
      <MenuIcon sx={{
        color:"white"
      }}/>
      </IconButton>
    </Toolbar>
    <SideBar open={open} setopen={setopen}/>
   </AppBar>

        </div>
    )

}