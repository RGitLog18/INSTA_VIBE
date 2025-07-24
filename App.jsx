import React, { useState } from "react";
import CreatePost from "./Components/CreatePost";
import ShowPost from "./Components/ShowPost";
import SearchUser from "./Components/SearchUser";
import Click from "./Components/Click"; 
import "./components/Style.css";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { BsCameraFill } from "react-icons/bs";
const App = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showSearchUser, setShowSearchUser] = useState(false);
  const [showClick, setShowClick] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const toggleCreatePost = () => setShowCreate((prev) => !prev);
  const refreshPosts = () => setRefreshTrigger((prev) => prev + 1);
  const toggleSearchUser = () => setShowSearchUser((prev) => !prev);
  const toggleClick = () => setShowClick((prev) => !prev); 

  return (
    <div className="app-container">
      <header className="app-header" style={{display:"flex", alignItems:"center", 
        justifyContent:"space-between",padding:"10px 20px", backgroundColor:"#fff", boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}}>
        <h1 style={{textAlign:"center"}}>
          <span className="Ti"><TiSocialInstagramCircular /></span>
          <span className="logo" >InstaVibe</span>
        </h1>

        <div style={{ marginLeft: "auto" }}>
          <img
            src="https://ui-avatars.com/api/?name=User&background=random"
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
              marginLeft: "20px",
              border: "2px solid #eee"
            }}
          />
        </div>
      </header>

      <main>
        <div className="action-buttons">
          <button className="plus-button" onClick={toggleCreatePost}>+</button>  
          <button className="search-user-button" onClick={toggleSearchUser}>🔍</button>
          <button className="camera-button" onClick={toggleClick}><BsCameraFill/></button>
        </div>

        {showCreate && <CreatePost setRefreshTrigger={setRefreshTrigger} />}
        {showSearchUser && <SearchUser />}
        {showClick && <Click onClose={toggleClick} onUpload={refreshPosts} />} 

        <ShowPost refreshTrigger={refreshTrigger} />
      </main>
    </div>
  );
};

export default App;
