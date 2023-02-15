import React, { useContext, useEffect, useRef, useState } from 'react';
import RightSideCard from '../NewsFeed/RightSideCard/RightSideCard';
import ChatBox from './ChatBox';
import LeftbarMessenger from './LeftbarMessenger';
import RighBarMessenger from './RighBarMessenger';
import LeftSideCard from '../NewsFeed/LeftSideCard/LeftSideCard'
import pp from '../../assest/images/pp.jpg'
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import './Messenger.css'


const Messenger = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  const [allUsers, setAllUsers] = useState([])
  // const [ChatHeaderUserName, setChatHeaderUserName] = useState({})
  const [currentFriend,setcurrentFriend] = useState("")
  const [newMessage,setNewMessage] = useState('')
  const [userDetails, setUserDetails] = useState();
  const [currentMessage, setCurrentMessage] = useState([])
  const scrollRef = useRef();
  

  useEffect(() =>{
    fetch(`https://endgame-jobstack-server.vercel.app/friends/${user?.email}`)
    .then(res => res.json())
    .then(data =>setAllUsers(data) )

  },[user?.email])

  console.log(allUsers)

  const date = new Date()
 

  const messageHandler = event =>{
    setNewMessage(event.target.value)
  }

  const sendMessage = event =>{
    event.preventDefault()
    
    const form = event.target;
    const data ={
      senderName: userDetails?.name,
      senderId:userDetails?._id,
      receiverId:currentFriend._id,
      message:newMessage && newMessage,
      date,
    }
    console.log(data)

    fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          refetch()
        }
      });


    
  }

  console.log(currentFriend?._id)

  useEffect(() =>{
    fetch(`http://localhost:5000/user/${user?.email}`)
    .then(res => res.json())
    .then(data => setUserDetails(data))
  },[user?.email])

 useEffect(() =>{
  scrollRef.current?.scrollIntoView({behaviour:"smooth"})
 },[currentMessage])

  const { data: userData = [],
  refetch ,isLoading} = useQuery({
 queryKey: ["userData",currentFriend?._id, userDetails?._id],
 queryFn: async () => {
   const res = await fetch(`http://localhost:5000/messages/displayMessaages/${currentFriend?._id}&${userDetails?._id}`);
   const data = await res.json();
   setCurrentMessage(data)
   // console.log(data);
   return data;
 },
});

console.log(currentMessage)




    return (
        <div className="messenger allContainer   px-4 grid grid-cols-1 md:grid-cols-8 gap-4 ">
      <div className="hidden message-show   md:block col-span-2">

        {/* LeftBarMessenger starts */}
        <div className="p-2 bg-green-700">
          <label className="label">
            {" "}
            {/* <span className="label-text text-xl font-bold text-white">
              Search your desire job here...
            </span> */}
          </label>
          <input
            className="rounded-md  w-full   text-gray-700 leading-tight focus:outline-none px-2 py-2 mx-auto"
            type="text"
            placeholder="Search  here..."
            onChange={(event) => {
              //   setSearchTerm(event.target.value);
            }}
          />
        </div>
       <div>
       {
        allUsers.map(friend => <div  onClick={()=> setcurrentFriend(friend)} className='cursor-pointer mess-left py-1' key={friend._id}>
          <LeftbarMessenger friend={friend}></LeftbarMessenger>
         </div>)
       }
       </div>
      </div>
      <div className="col-span-4 shadow-2xl">
        {/* <CreatePost></CreatePost> */}
       {
        currentFriend?<ChatBox  scrollRef={scrollRef} refetch={refetch} currentMessage={currentMessage} userDetails={userDetails} sendMessage={sendMessage} newMessage={newMessage} messageHandler={messageHandler} currentFriend={currentFriend} ></ChatBox> : <div className='text-center mt-96'><h3 className=' font-extrabold '>Please Select A Friend To Chat!!!</h3></div>
       }
      </div>
      <div className="hidden p-1  md:block col-span-2">
       {
        currentFriend && <RighBarMessenger currentFriend={currentFriend}></RighBarMessenger>
       }
      </div>
    </div>
    );
};

export default Messenger;