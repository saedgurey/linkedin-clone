import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Login from './Login'
import "./App.css"
import Feed from './Feed'
import { useSelector } from 'react-redux'
import { selectUser } from './feature/userSlice'




const App = () => {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />
      {!user ? (
         <Login/>
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
         
        </div>
      )}
    </div>
  )
}

export default App