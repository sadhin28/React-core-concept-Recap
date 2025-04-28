import './Post.css'
import Posts from './Posts'
export default function Post({posts}){
    const {title,userId,
        body
        
    }=posts
    console.log(posts)
    return(
        <div className='post'>
            
            <h3>Title : {title}</h3>
            <p><small>User Id : {userId
            } </small></p>
            <p>Body : {body} </p>
        </div>
    )
}