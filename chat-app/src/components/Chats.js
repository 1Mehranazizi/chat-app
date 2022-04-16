import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

//firebase
import { auth } from "../firebase";

//components
import Navbar from "./Navbar";

//context
import { AuthContext } from "../context/AuthContextProvider";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  console.log(user)

  const history = useHistory();
  const logOutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  useEffect(() => {
      if(!user) {
          history.push("/")
      }

      axios.get("https://api.chatengine.io/users/me" , {
          Headers :{
              "project-id" : "f5cd3659-10ae-48b3-9b39-cd98a6f7aefe",
              "user-name" : user.email,
              "user-secret" : user.uid
          }
      })
      .then (() => {
          setLoading(false)
      })
      .catch (() => {
          let formdata = new FormData();
          formdata.append("email" , user.email);
          formdata.append("username" , user.email);
          formdata.append("secret" , user.uid);
          getFile(user.photoURL)
            .then(avatar => {
                formdata.append("avatar" , avatar , avatar.name);
                axios.post("https://api.chatengine.io/users/" , formdata , {
                    headers : {
                        "private-key" : "7d254c98-5bad-4f3d-8056-14468a4e5d82"
                    }
                })
                .then(() => setLoading(false))
                .catch((error => console.log(error)))
            })
      })

  } , [user, history])

  const getFile = async (url) => {
      const response = await fetch(url);
      const data = await response.blob();
      return new File([data] , "userPhoto.jpg" , {type : "jpeg"})
  }

  if(!user || loading) return "Loading..."

  return (
    <div>
      <Navbar logOutHandler={logOutHandler} />
      <ChatEngine
        height="calc(100vh - 60px)"
        projectID="f5cd3659-10ae-48b3-9b39-cd98a6f7aefe"
        userName= {user.email}
        userSecret= {user.uid}
      />
    </div>
  );
};

export default Chats;
