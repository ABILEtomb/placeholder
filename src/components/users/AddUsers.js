import React from 'react';
import {UsersContext} from "./UsersContext"
import {TextField,Button,Modal,Box, Typography,IconButton } from '@mui/material';
import { useContext,useState,useEffect } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';


const AddUsers = () => {

    const [data,setData] = useContext(UsersContext);
    const  [name, setName] = useState("");
    const  [username, setUsername] = useState("");
    const  [email, setEmail] = useState("");
    const  [website, setWebsite] = useState("");
    const [openModal, setopenModal] = useState(false);

    useEffect(() => {

      setData([...data])

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

           fetch('https://jsonplaceholder.typicode.com/users', {
            
               method:"POST",
               body: JSON.stringify({
                name:name,
                username:username,
                email:email,
                website:website
               }),
               headers:{
                   "Content-type":'application/json; charset = UTF-8'
               }})
           .then(response => response.json() )
   
           .then(json => {
            setData([...data,json])
               console.log(json);
               setName("")
               setEmail("")
               setUsername("")
               setWebsite("")
           })

      setopenModal(false)
   
       }

    return (
        <div>
        <IconButton sx={{
           margin:"2rem 0"
        }}>
            <AddBoxIcon color='primary'  onClick={() => setopenModal(true)}/>
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
                Add New Photos
            </Typography>

            <TextField name='Photos' value={name} onChange={(e) => setName(e.target.value)} variant="outlined" label="name"     sx={{

                width:"80%"
            }} />
            
            <TextField name='username' value={username} onChange={(e) => setUsername(e.target.value)} variant="outlined" label="username"   sx={{
                width:"80%"
            }} />
             <TextField name='email' value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" label="email"   sx={{
                width:"80%"
            }} />
             <TextField name='website' value={website} onChange={(e) => setWebsite(e.target.value)} variant="outlined" label="website"   sx={{
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

export default AddUsers;
