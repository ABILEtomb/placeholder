import React from 'react';
import './App.css';
import {Home} from "./Home"
import { NavBar } from './components/NavBar';
import { Routes,Route } from 'react-router-dom';
import {CommentContent} from './components/comments/CommentContent';
import {AlbumsContent} from './components/albums/AlbumsContent';
import {PhotosContent} from './components/photos/PhotosContent';
import {PostsContent} from "./components/posts/PostsContent";
import {TodosContent} from "./components/todos/TodosContent";
import {UsersContent} from "./components/users/UsersContent";
import {AlbumsProvider} from './components/albums/AlbumsContext';
import {CommentProvider} from './components/comments/CommentContext';
import { PhotosProvider } from './components/photos/PhotosContext';
import { PostsProvider } from './components/posts/PostsContext';
import { TodosProvider } from './components/todos/TodosContext';
import { UsersProvider } from './components/users/UsersContext';
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
  return (
    <div className="App">

<AlbumsProvider>
<CommentProvider>
<PhotosProvider>
<PostsProvider>
<TodosProvider>           
 <UsersProvider>          
           <NavBar/>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Albums' element={<AlbumsContent/>}/>
      <Route path='/Comment' element={<CommentContent/>}/>
      <Route path='/Photos' element={<PhotosContent/>}/>
      <Route path='/Posts' element={<PostsContent/>}/>
      <Route path='/Todos' element={<TodosContent/>}/>
      <Route path='/Users' element={<UsersContent/>}/>
     </Routes>
     </UsersProvider> 
</TodosProvider>
     </PostsProvider>
     </PhotosProvider>
     </CommentProvider>
     </AlbumsProvider>
    </div>

  );
}

export default App;
