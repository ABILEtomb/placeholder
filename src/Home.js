import React from "react";
import { Paper, Typography, Grid, Container} from "@mui/material";
import albums from "./components/illustration/undraw_posting_photo_re_plk8.svg";
import comments from "./components/illustration/undraw_reviews_lp8w.svg";
import photos from "./components/illustration/undraw_photos_re_pvh3.svg";
import posts from "./components/illustration/undraw_posts_re_ormv.svg";
import todos from "./components/illustration/undraw_to_do_re_jaef.svg";
import users from "./components/illustration/undraw_meet_the_team_re_4h08.svg"
import { Link } from "react-router-dom";

 export function Home () {
    return (
<Container sx={{
padding:"5rem 0 1rem 0"
}}>
<Typography variant="h4" sx={{
    padding:"2rem 0",
    textAlign:"center",
    wordWrap:"break-word",
    textTransform:"capitalize"
}}>
    Json Placeholder:React
</Typography>
        <Grid container spacing={3}
        sx={{
            direction:"row",
            justifyContent:"center",
            alignItems:"center"

        }}
        >
        <Grid item xs={10} sm={8} md={5} lg={4}>
        <Link to={'/Albums'} className="link">
     <Paper  sx={{
         width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"1rem 2rem",
        gap:"0.5rem"
     }} elevation={10}>
     <Typography variant="h4" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue'
     }}>
        Albums
     </Typography>
<img src={albums} alt=""  width="70%"/>
<Typography variant="p" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue',
        fontSize:"20px"
     }}>check memories made</Typography>
     </Paper>
     </Link>
     </Grid>
     <Grid item xs={10} sm={8} md={5} lg={4}>
     <Link to={'/Comment'} className="link">
     <Paper elevation={10} sx={{
         width:"100%",
          display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"1rem 2rem",
        gap:"0.5rem"
     }}>
     <Typography variant="h4" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue'
     }}>
        Comments
     </Typography>
<img src={comments} alt=""  width="70%"/>
<Typography variant="p" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue',
        fontSize:"20px"
     }}>what do you think ?</Typography>
     </Paper>
     </Link>
     </Grid>
     <Grid item xs={10} sm={8} md={5} lg={4}>
     <Link to={'/Photos'} className="link">
     <Paper elevation={10} sx={{
        width:"100%",
          display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"1rem 2rem",
        gap:"0.5rem"
     }}>
     <Typography variant="h4" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue'
     }}>
        Photos
     </Typography>
<img src={photos} alt=""  width="70%"/>
<Typography variant="p" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue',
        fontSize:"20px"
     }}>let's talk more</Typography>
     </Paper>
     </Link>
     </Grid>
     <Grid item xs={10} sm={8} md={5} lg={4}>
     <Link to={'/Posts'} className="link">
     <Paper elevation={10} sx={{
         width:"100%",
          display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"1rem 2rem",
        gap:"0.5rem"
     }}>
     <Typography variant="h4" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue'
     }}>
        Posts
     </Typography>
<img src={posts} alt=""  width="70%"/>
<Typography variant="p" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue',
        fontSize:"20px"
     }}>writing clears the mind</Typography>
     </Paper>
     </Link>
     </Grid>
     <Grid item xs={10} sm={8} md={5} lg={4}>
     <Link to={'/Todos'} className="link">
     <Paper elevation={10} sx={{
         width:"100%",
          display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"1rem 2rem",
        gap:"0.5rem"
     }}>
     <Typography variant="h4" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue'
     }}>
        Todos
     </Typography>
<img src={todos} alt=""  width="70%"/>
<Typography variant="p" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue',
        fontSize:"20px"
     }}>check your checklist</Typography>
     </Paper>
     </Link>
     </Grid>
     <Grid item xs={10} sm={8} md={5} lg={4}>
     <Link to={'/Users'} className="link">
     <Paper elevation={10} sx={{
         width:"100%",
          display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"1rem 2rem",
        gap:"0.5rem"
     }}>
     <Typography variant="h4" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue'
     }}>
        Users
     </Typography>
<img src={users} alt=""  width="70%"/>
<Typography variant="p" sx={{
        textDecoration:'underline',
        display:"inline",
        textDecorationColor:'skyblue',
        fontSize:"20px"
     }}>who's on the platform</Typography>
     </Paper>
     </Link>
     </Grid>
     </Grid>
        </Container>
      );
}

