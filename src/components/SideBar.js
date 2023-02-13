import React from 'react';
import { Drawer,Typography,Button,Box } from '@mui/material';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CommentIcon from '@mui/icons-material/Comment';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';

const SideBar = ({open,setopen}) => {
    return (
       
            <Drawer open={open} onClose={() => setopen(false)} >
            <Box sx={{
                width:{
                    xs:"100vw",
                    sm:"80vw"
                }
            }}>
                <Link to={'/'} className="link" onClick={() => setopen(false)}>
                <Typography variant='h5' color='primary' sx={{
                    margin:"1rem 1rem",
                    textAlign:"right",
                }}>

                    R,R & J
                </Typography>
                </Link>
                <Link to={'/Albums'} className="link" onClick={()=> setopen(false)}>
                <Typography variant='div'   sx={{
                    margin:"1rem 0",
                    borderBottom:"1px solid #e0e0e0",
                    padding:"1rem 1rem",
                    display:"flex",
                    alignItems:"center",
                    gap:"2rem",
                    color:"black" 
                }}>
                <PhotoLibraryIcon color="primary"/>
                   Albums
                </Typography>
                </Link>
                <Link to={'/Comment'} className="link"  onClick={()=> setopen(false)}>
                <Typography variant='div'sx={{
                    margin:"1rem 0",
                    borderBottom:"1px solid #e0e0e0",
                    padding:"1rem 1rem",
                    display:"flex",
                    alignItems:"center",
                    gap:"2rem",
                    color:"black"
             
                }}>
                <CommentIcon  color="primary" />
                   Comments
                </Typography>
                </Link>
                <Link to={'/Photos'} className="link"  onClick={()=> setopen(false)}>
                <Typography variant='div'   sx={{
                    margin:"1rem 0",
                    borderBottom:"1px solid #e0e0e0",
                    padding:"1rem 1rem",
                    display:"flex",
                    alignItems:"center",
                    gap:"2rem",
                    color:"black"
                   
                }}>
                <CropOriginalIcon color="primary"/>
                  Photos
                </Typography>
                </Link>
                <Link to={'/Posts'} className="link"  onClick={()=> setopen(false)}>
                <Typography variant='div' sx={{
                    margin:"1rem 0",
                    borderBottom:"1px solid #e0e0e0",
                    padding:"1rem 1rem",
                    display:"flex",
                    alignItems:"center",
                    gap:"2rem",
                    color:"black"
                  
                }}>
                <PostAddIcon   color="primary" />
                    Posts
                </Typography>
                </Link>
                <Link to={'/Todos'} className="link"  onClick={()=> setopen(false)}>
                <Typography variant='div' sx={{
                    margin:"1rem 0",
                    borderBottom:"1px solid #e0e0e0",
                    padding:"1rem 1rem",
                    display:"flex",
                    alignItems:"center",
                    gap:"2rem",
                    color:"black"
               
                }}>
                <FormatListBulletedIcon  color="primary"/>
                   Todos
                </Typography>
                </Link>
                <Link to={'/Users'} className="link"  onClick={()=> setopen(false)}>
                <Typography variant='div' sx={{
                    margin:"1rem 0",
                    borderBottom:"1px solid #e0e0e0",
                    padding:"1rem 1rem",
                    display:"flex",
                    alignItems:"center",
                    gap:"2rem",
                    color:"black"
                }}>
                <GroupIcon color="primary" />
                    Users
                </Typography>
                </Link>
                <Link to="https://github.com/ABILEtomb/placeholder.git" className='link'>
                <Button color='primary' variant="contained" sx={{
                    margin:"1rem 1rem"
                }}>Github</Button>
                </Link>
                </Box>
            </Drawer>
       
    );
}

export default SideBar;
