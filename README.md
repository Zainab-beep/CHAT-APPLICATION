# CHAT-APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: ZAINAB UNISA NAAZNEEN

*INTERN ID*: CT04DM194

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

This is a simple real-time chat application built using Node.js, Express.js, Socket.IO, and basic frontend technologies (HTML, CSS, and JavaScript**). The application allows multiple users to chat in real-time using WebSocket technology. It’s a beginner-friendly project that demonstrates how real-time bi-directional communication works between the client and server using Socket.IO.

Features
Real-time messaging without page refresh
Minimal and clean chat interface
Lightweight frontend built using plain HTML, CSS, and JavaScript
Automatic scrolling to the latest message
Supports multiple users across different tabs or devices

Folder Structure
project-folder/
│
├── public/
│   ├── index.html        # Chat interface
│   ├── style.css         # Basic styling
│   └── script.js         # Frontend socket logic
│
├── server.js             # Node.js backend with Express and Socket.IO
├── package.json          # Project metadata and dependencies

Tools Used
Node.js: For running JavaScript on the server.
Express.js: Handles HTTP server setup and serves static files.
Socket.IO: Enables real-time, event-driven communication.
HTML/CSS/JS: Forms the structure and interaction on the frontend.

How It Works
Backend (server.js)
Initializes an Express server.
Serves static files from the public directory.
Uses Socket.IO to listen for 'chat message' events.
Broadcasts received messages to all connected clients.

Frontend
Connects to the server via Socket.IO when the page loads.
Listens for 'chat message' events and displays them in the chat window.
Sends messages to the server when the user presses Enter.

How to Run
1. Clone the repository (if using version control):
git clone <repo-url>
cd project-folder
2. Install dependencies:
npm install
3. Start the server:
node server.js
4. Open the app in your browser:
http://localhost:3000
5. Test real-time messaging by opening multiple tabs or devices.

Sample UI
The application features a basic chat interface:
A scrollable message area to view all messages
A single input field at the bottom to type and send messages.

Conclusion
This project offers a straightforward example of building a real-time chat system using Socket.IO. It’s a great entry point for understanding WebSockets and how frontend and backend can communicate in real time. With just a few files and some basic logic, this chat app provides a foundation for more complex real-time applications in the future.

OUTPUT
