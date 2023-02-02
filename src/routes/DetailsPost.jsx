import {useState, useEffect} from 'react';
import blogFetch from '../axios/config';

const DetailsPost = () => {
    const [ posts, setPosts]= useState([]);

    const getPosts = async() => {
        try {
          const response = await blogFetch.get('/posts')
          const data = response.data
          setPosts(data)
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(()=>{
        getPosts();
      }, [])
  return (
    <div>{posts.map((detail)=><p>{detail.detail}</p>)}</div>
  )
}

export default DetailsPost