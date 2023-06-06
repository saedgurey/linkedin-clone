import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import "./Feed.css"
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';



const Feed = () => {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState("");

   useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
}, []);


const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      

        name: 'posts',
        description:'its a test',
        message: input,
        photoUrl:"",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput("");
}

return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                < CreateIcon />

                <form >
                    <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
                <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                <InputOption
                    title="Write article"
                    Icon={CalendarViewDayIcon}
                    color="#7FC15E" />
            </div>
        </div>
        {/* Posts */}
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
            
            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}

    </div>
)
}

export default Feed