import React, { useContext, useState } from "react";
import emoji from "../img/happiness.png"
import Add from "../img/gallery.png"
import Send from "../img/paper-plane.png"
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import {v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import EmojiPicker from 'emoji-picker-react';
import moment from 'moment';

const Input = () => {
    const [text,setText] = useState("");
    const [img, setImg] = useState(null);
    const [showPicker,setShowPicker] = useState(false);

    const {currentUser} = useContext(AuthContext);
    const {data} = useContext(ChatContext);

    const handleSend = async () => {
        if (img) {
          const storageRef = ref(storage, uuid());
    
          const uploadTask = uploadBytesResumable(storageRef, img);
    
          uploadTask.on(
            (error) => {
              //TODO:Handle Error
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                await updateDoc(doc(db, "chats", data.chatId), {
                  messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: moment().format('LLL'),
                    img: downloadURL,
                  }),
                });
                console.log(downloadURL);
              }).catch((err)=>{
                console.log(err);
              });
            }
          );
        } else {
          await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text:text,
              senderId: currentUser.uid,
              date: moment().format('LLL'),
            }),
          });
        }
    
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [data.chatId + ".lastMessage"]: {
            text,
          },
          [data.chatId + ".date"]: serverTimestamp(),
        });
    
        await updateDoc(doc(db, "userChats", data.user.uid), {
          [data.chatId + ".lastMessage"]: {
            text,
          },
          [data.chatId + ".date"]: serverTimestamp(),
        });
        setShowPicker(false);
        setText("");
        setImg(null);
    };
    // function handleOnEnter(e, emojiObj) {
    //     console.log("enter", e.emoji);
    // }

    return (
        <div className="input">
            <img className="emoj" src={emoji} alt="" onClick={e=>setShowPicker(!showPicker)} />
            <input type="text" placeholder="Type Message" 
            onChange={e=>setText(e.target.value)}
            value={text}></input>
            {showPicker && <span>
                <EmojiPicker emojiStyle="facebook"
                    onEmojiClick={(e)=>{setText(p=>p+e.emoji);}} />
            </span>}
            <div className="send">
                <input type="file" style={{display:"none"}} id="file"
                onChange={e=>setImg(e.target.files[0])}></input>
                <label htmlFor="file">
                    <img src= {Add} alt=""></img>
                </label>
                <button onClick={handleSend}><img src={Send} alt="Send" /></button>
            </div>
        </div>
    )
    
}

export default Input;