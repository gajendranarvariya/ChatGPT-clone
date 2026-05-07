import { useState, useEffect, useRef } from 'react'
import './App.css'
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
// import sendMagToOpenAI from "./services/openai.js";


function App() {

  const msgEnd = useRef(null);

  const[input, setInput] = useState("");
  const[messages, setMessages] = useState([
    {
      text:"Hi, i am ChatGPT, a state-of-the art language model developer by",
      isBot:true
    }
  ]);

  useEffect(()=>{
    msgEnd.current.scrollIntoView();
  },[messages]);

  /*async function handleSend(){
    try{
      const res = await sendMagToOpenAI(msg);
      setChatgpt([...chatgpt, res]);
    }catch(e){
      console.log(e.message)
    }
  }*/

  const handleSend = async () => {
    try{
      /*setMessages([...messages, {text:input, isBot:false}]);
      const res = await sendMagToOpenAI(input);
      setMessages([...messages, {text:res, isBot:true}]);*/

     /* const res = await sendMagToOpenAI(input);
      setMessages([
        ...messages, 
        {text:input, isBot:false},
        {text:res, isBot:true},
      ]);*/

      const text = input;
      setInput("");
      setMessages([
        ...messages,
        {text, isBot:false}
      ])
      const res = await sendMagToOpenAI(text);
      setMessages([
        ...messages, 
        {text, isBot:false},
        {text:res, isBot:true},
      ]);


    }catch(e){
      console.log(e.message)
    }
  }

  const handleEnter = async (e) => {
    // alert("sdbdkfjsd sdkjbfksdj");
    if(e.key=="Enter") await handleSend();
  }


 const handlQuery = async (e) => {
    try{
      const text = e.target.value;
      setMessages([
        ...messages,
        {text, isBot:false}
      ])
      const res = await sendMagToOpenAI(text);
      setMessages([
        ...messages, 
        {text, isBot:false},
        {text:res, isBot:true},
      ]);


    }catch(e){
      console.log(e.message)
    }
  }  

  return (
    <>
      <div className="App">

        {/* ************ Sidebar Start ************ */}
        <div className="sidebar">
            <div className="upperSide">
                <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span></div>
               
                <button className="midBtn" onClick={()=>window.location.reload()}><img src={addBtn} alt="new chat" className="addBtn" /> New Chat</button>
                 
                <div classNam="upperSideBottom">
                  <button className="query" onClick={handlQuery} value={"What is Programming ?"}><img src={msgIcon} alt="Query"/> What is Programming ?</button>
                  <button className="query" onClick={handlQuery} value={"How to use an API ?"}><img src={msgIcon} alt="Query"/> How to use an API ?</button>
                </div>
            </div> 
            <div className="lowerSide">
              <div className="listItems"><img src={home} alt="Home" className="listItemsImg"/>Home</div>
              <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg"/>Saved</div>
              <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg"/>Upgrade to Pro</div>
            </div> 
        </div> 
        {/* ************ Sidebar end ************ */}



        {/* ************ main start ************ */}
        <div className="main">
          <div className="chats">
            {/*<div className="chat">
              <img className="chatImg" src={userIcon} alt="user"/><p className="txt">lorem ssu sduh sdjjgi owiu modifif dfofgjero sdidiubbfs </p>
            </div>
            <div className="chat bot">
              <img className="chatImg" src={gptImgLogo} alt="chatgpt"/><p className="txt">lorem ssu sduh sdjjgi owiu modifif dfofgjero sdidiubbfs ChatGPt may produce inoccurate information about people, places, or facts, ChatGPT August 20 version ChatGPt may produce inoccurate information about people, places, or facts, ChatGPT August 20 version ChatGPt may produce inoccurate information about people, places, or facts, ChatGPT August 20 version ChatGPt may produce inoccurate information about people, places, or facts, ChatGPT August 20 versionChatGPt may produce inoccurate information about people, places, or facts, ChatGPT August 20 versionChatGPt may produce inoccurate information about people, places, or facts, ChatGPT August 20 version ChatGPt may produce inoccurate information about people, places, or facts, ChatGPT August 20 version ChatGPt may produce inoccurate information about people, places, or facts, ChatGPT August 20 version ChatGPt may produce inoccurate information about people, places, or facts, ChatGPT August 20 version ChatGPt may produce inoccurate information about people, places, or facts, ChatGPT August 20 version</p>
            </div>*/}
            
            {/*first one return div this tyep*/}
            {/*{messages.map((message, index)=>{
              return (<div key={index} className={message.isBot ? "chat bot" : "chat"}>
                <img className="chatImg" src={message.isBot ? gptImgLogo : userIcon} alt="chatgpt"/><p className="txt">{message.text}</p>
              </div>)
            })}*/}

            {/*2nd type*/}
            {/*{messages.map((message, index)=>{
              return <div key={index} className={message.isBot ? "chat bot" : "chat"}>
                <img className="chatImg" src={message.isBot ? gptImgLogo : userIcon} alt="chatgpt"/><p className="txt">{message.text}</p>
              </div>
            })}*/}

            {messages.map((message, index)=>
              <div key={index} className={message.isBot ? "chat bot" : "chat"}>
                <img className="chatImg" src={message.isBot ? gptImgLogo : userIcon} alt="chatgpt"/><p className="txt">{message.text}</p>
              </div>
            )}
            <div ref={msgEnd}/>
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={handleEnter} placeholder="Send a message" /><button onClick={handleSend} className="send"><img src={sendBtn} alt="Send"/></button>
            </div>
            <p>ChatGPt may produce inoccurate information about people, places, or facts, ChatGPT August 20 version</p>
          </div>
        </div> 
        {/* ************ main end ************ */}
      </div> 
    </>
  )
}

export default App
