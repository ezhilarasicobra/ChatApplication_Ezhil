import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

function MessageForm(props) {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;
  const handlesubmit = (event) => {
    event.preventDefault();
    const text = value.trim();
    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue("");
  };
  const handlechange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };
  const handleupload=(event)=>{
sendMessage(creds,chatId,{files:event.target.files,text:''})
  }
  return (
    <form className="message-form" onSubmit={handlesubmit}>
      <input
        className="message-input"
        placeholder="send a message..."
        value={value}
        onChange={handlechange}
        onSubmit={handlesubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">

          <PictureOutlined className="picture-icon"/>
        </span>
      </label>
      <input 
      type="file"
      multiple={false}
      id="upload-button"
      style={{display:'none'}}
      onChange={handleupload}
      />
      <button type="submit" className="send-button"><SendOutlined className="send-icon"/></button>
    </form>
  );
}

export default MessageForm;