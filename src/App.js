import {ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    //passing props
    <ChatEngine  height="100vh" projectID="2a7af28d-5db0-43d3-acf0-c6458ac52511" userName={localStorage.getItem('username')} userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>} />

  );
}

export default App;
