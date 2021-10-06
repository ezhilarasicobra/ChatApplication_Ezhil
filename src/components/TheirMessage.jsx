import React from "react";

function TheirMessage({ lastMessage, message }) {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message Attachments"
          className="message-image"
          style={{marginLeft: isFirstMessageByUser ?'4px':'48px' }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            marginLeft: isFirstMessageByUser ?'4px':'48px' ,
            backgroundColor:"pink",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

export default TheirMessage;
