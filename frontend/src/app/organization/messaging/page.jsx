"use client";

import React, { useState } from 'react';

export default function MessagingPage() {
  // Mock data for contacts and messages
  const contacts = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis', 'David Brown'];
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messages, setMessages] = useState([
    { sender: 'John Doe', text: 'Hello, how are you?', timestamp: '10:30 AM' },
    { sender: 'You', text: 'I’m good, how about you?', timestamp: '10:32 AM' },
    { sender: 'John Doe', text: 'I am doing well, thanks!', timestamp: '10:33 AM' },
    { sender: 'You', text: 'Great to hear!', timestamp: '10:35 AM' },
    { sender: 'John Doe', text: 'Macho', timestamp: '10:33 AM' },
    { sender: 'You', text: 'Thanks!', timestamp: '10:35 AM' },
    { sender: 'John Doe', text: 'Hello', timestamp: '10:33 AM' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { sender: 'You', text: newMessage, timestamp: 'Now' }]);
    setNewMessage('');
  };

  return (
    <div className="h-full bg-gray-100 flex">
      <aside className="w-1/4 bg-white shadow-lg h-full">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Contacts</h2>
        </div>
        <ul className="divide-y divide-gray-200 h-full overflow-y-auto">
          {contacts.map((contact, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedContact(contact)}
                className={`w-full text-left px-4 py-3 text-lg ${
                  selectedContact === contact
                    ? 'bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {contact}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex-1 bg-white flex flex-col h-full">

        <header className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-semibold text-gray-900">{selectedContact}</h2>
        </header>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'You' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                    message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  <p>{message.text}</p>
                  <small className="block text-xs text-gray-500 mt-1">{message.timestamp}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="border-t p-4 bg-gray-50">
          <div className="flex">
            <input
              type="text"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
