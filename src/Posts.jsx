import { useEffect, useState } from "react"
import Post from "./Post";
export default function Posts(){
    const [post, setposts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            setposts(data)
           
        })
        
    },[])
    return(
        <div>
            <h3>Posts : {post.length}</h3>
            {
                post.map(post=><Post posts={post} ></Post>)
            }
        </div>
    )
}