import React from 'react';
import {CommentContext} from "./CommentContext"
import {TextField,Button,Modal,Box, Typography,IconButton } from '@mui/material';
import { useContext,useState,useEffect } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';


const AddComment = () => {

    const [data,setData] = useContext(CommentContext);
    const  [name, setName] = useState("");
    const  [email, setEmail] = useState("");
    const  [body, setBody] = useState("");
    const [openModal, setopenModal] = useState(false);

    useEffect(() => {

      setData([...data])

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

           fetch('https://jsonplaceholder.typicode.com/comments', {
            
               method:"POST",
               body: JSON.stringify({
                name:name,
                email:email,
                body:body
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
               setBody("")
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
                Add New Comments
            </Typography>
            <TextField name='name' value={name} onChange={(e) => setName(e.target.value)} variant="outlined" label="Name"   sx={{
                width:"80%"
            }} />

            <TextField name='email' value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Email"   sx={{
                width:"80%"
            }} />
            <TextField name='body' value={body} onChange={(e) => setBody(e.target.value)} variant="outlined" label="Body"   sx={{
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

export default AddComment;
