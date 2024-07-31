// src/App.js
import React, { useEffect, useState } from 'react';
import { connectStomp, disconnectStomp } from './services/RabbitMQService';
import { getChatRooms, getMessages, sendMessage } from './services/ChatService';

function App() {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchChatRooms();

    return () => {
        disconnectStomp();
    };
  }, []);

  const fetchChatRooms = async () => {
    try {
      const rooms = await getChatRooms();
      setChatRooms(rooms || []);
    } catch (error) {
      console.error('Failed to fetch chat rooms:', error);
    }
  };

  const fetchMessages = async (roomId) => {
    try {
      const messages = await getMessages(roomId);
      setMessages(messages || []);
      setSelectedRoomId(roomId);
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
  };

  const handleRoomSelection = (roomId) => {
    disconnectStomp();
    fetchMessages(roomId);
    connectStomp(roomId, (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  };

  const handleSendMessage = async () => {
      if (selectedRoomId && newMessage.trim()) {
          try {
              await sendMessage(selectedRoomId, newMessage);
              setNewMessage('');
              fetchMessages(selectedRoomId);
          } catch (error) {
              console.error('Failed to send message:', error);
          }
      }
  };

  return (
    <div className="App">
      <h1>Chat Rooms</h1>
      <ul>
        {chatRooms.map((room) => (
          <li key={room.chatRoomId} onClick={() => handleRoomSelection(room.chatRoomId)}>
            {room.name}
          </li>
        ))}
      </ul>
      {selectedRoomId && (
        <div>
          <h2>Messages</h2>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>
                {msg.senderName}: {msg.content}
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
    </div>
  );
}

export default App;