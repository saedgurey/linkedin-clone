import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Login from './Login'
import "./App.css"
import Feed from './Feed'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout, selectUser } from './feature/userSlice'
import { auth } from "./firebase";
import Widgets from './Widgets'




const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    //eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Header />
      
      {!user ? (
         <Login/>
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
           <Widgets/>
        </div>
      )}
    </div>
  )
}

export default App