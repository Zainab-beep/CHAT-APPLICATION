const socket = io(); // Connect to server

const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');

// Send message to server
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = input.value;
  socket.emit('chat message', message);
  input.value = '';
});

// Receive message from server
socket.on('chat message', (msg) => {
  const msgElement = document.createElement('div');
  msgElement.textContent = msg;
  messagesDiv.appendChild(msgElement);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});