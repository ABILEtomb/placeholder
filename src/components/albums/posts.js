import React from 'react';
import {AlbumsContext} from "./AlbumsContext"
import {TextField,Button,Modal,Box, Typography,IconButton } from '@mui/material';
import { useContext,useState,useEffect } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';


const Posts = () => {

    const [data,setData] = useContext(AlbumsContext);
    const  [albums, setAlbums] = useState("");
    const [openModal, setopenModal] = useState(false);

    useEffect(() => {

      setData([...data])

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

           fetch('https://jsonplaceholder.typicode.com/albums', {
            
               method:"POST",
               body: JSON.stringify({
                title:albums
               }),
               headers:{
                   "Content-type":'application/json; charset = UTF-8'
               }})
           .then(response => response.json() )
   
           .then(json => {
            setData([...data,json])
               console.log(json);
               setAlbums("")
           })

      setopenModal(false)
   
       }

    return (
        <div>
        <IconButton  sx={{
           margin:"2rem 0"
        }}>
            <AddBoxIcon color='primary' onClick={() => setopenModal(true)}/>
        </IconButton>

        <Modal open={openModal} onClose={() => setopenModal(false)}>

            <form onSubmit={handleSubmit} style={{
                height:"100vh",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
            }}>
            <Box sx={{
                width:{
                    xs:"90%",
                    sm:"500px",
                    md:"600px"
                },
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start",
                padding:"2rem 2rem",
                backgroundColor:"white",
                gap:"1rem",
                borderRadius:"1rem"
            }}>
            <Typography variant='h5'>
                Add New Album
            </Typography>
            <TextField name='albums' value={albums} onChange={(e) => setAlbums(e.target.value)} variant="outlined" label="Albums"   sx={{
                width:"80%"
            }} />
            <Button type='submit' variant='contained' color='primary'  sx={{
                width:"100px" }}>
                click
            </Button>
            </Box>
        </form> 
        </Modal>
        </div>
    );
}

export default Posts;
