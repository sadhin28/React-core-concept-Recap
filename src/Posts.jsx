import { useEffect, useState } from "react"

export default function Posts(){
    const [posts, setposts]=useState([]);
    useEffect(()=>{

    },[])
    return(
        <div>
            <h3>Posts : {posts} </h3>
        </div>
    )
}