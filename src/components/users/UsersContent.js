import React from 'react';
import {UsersContext} from "./UsersContext"
import { useContext,useState } from 'react';
import { Paper,Container,Grid,Box,IconButton,Typography } from '@mui/material';
import AddUsers from './AddUsers';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactPaginate from 'react-paginate';

export const UsersContent = () => {

    const [data,setData,isloading] = useContext(UsersContext);

  

    const deleteRequest = (id) => {

        setData((data) => data.filter((del) => del.id !== id));

        
        fetch('https://jsonplaceholder.typicode.com/users' + id, {
            method: 'DELETE',
            headers:{
                "Content-type":'application/json; charset = UTF-8'
            }
          }).then(response => response.json()).then( (json) => {
            console.log(json);
            console.log('deleted')
          })
          
    }
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };

return (
    <Container sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"5rem"
    }}>
     {isloading  &&
            <p>
                Loading....
            </p>}
            <Typography variant="h4" sx={{
                padding:"1rem 0"
            }}>
                Users
            </Typography>
   <AddUsers/>
   <Grid container spacing={4} sx={{
   alignItems:"center",
   justifyContent:"center"
   }}>
 
    {
        currentItems.map(datas => (
            <Grid item xs={10} sm={8} md={5} lg={4} key={datas.id}>
            <Paper elevation={7} sx={{
                width:{
                    xs:"100%",
                },
                padding:"1rem 1rem",
                textAlign:"center",
                display:"flex",
                flexDirection:"column",
                gap:"1rem"
            }}>
           <p>{datas.id}</p>
           <p>{datas.name}</p>
           <p>{datas.username}</p>
           <p>{datas.email}</p>
           <p>{datas.website}</p>
           <Box sx={{
            width:"100%",
            padding:"0 1rem",
            display:"flex",
            justifyContent:"space-between"
           }}>
            <IconButton>
                <EditIcon color='primary' />
            </IconButton>
            <IconButton>
                <DeleteIcon onClick={() => deleteRequest(datas.id)} color='primary'/>
            </IconButton>
           </Box>
            </Paper>
            </Grid>
        ))
    }
   
    </Grid>
    <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName='page-num'
        previousClassName='page-num'
        nextClassName='page-num'
        activeLinkClassName='active'
      />
    </Container>
);
    
}


