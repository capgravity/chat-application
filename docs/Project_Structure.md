# Project Directory Structure
The `text-wave` directory contains the following directories and files:  

1. **`src/`**: Backend source code  
    1. **`controllers/`**: Handles API route logic  
    2. **`db/`**: Handles the setup and configuration of the database connection  
    3. **`models/`**: MongoDB database models  
    4. **`routes/`**: Defines API routes  
    5. **`middleware/`**: API route middleware  
    6. **`utils/generateToken.js`**: Generates a JWT for authorization  
    7. **`socket/socket.js`**: Manages WebSocket connections for real-time communication  
    8. **`server.js`**: Main entry point for the backend Express server  

2. **`frontend/`**: Frontend source code  
    1. **`src/`**:
        1. **`components/`**: Reusable UI components  
        2. **`context/`**: Manages Global state using React's Context API  
        3. **`zustand/useConversation.js`**: State management for Conversations using Zustand  
        4. **`hooks/`**: Custom React hooks  
        5. **`utils/`**: Utility functions  
            1. **`emoji.js`**: Emoji data handling  
            2. **`extractTime.js`**: Extracts and formats time from date strings  
        6. **`pages/`**: Page components  
            1. **`home/`**: Home page  
            2. **`login/`**: Login page  
            3. **`signup/`**: Signup page  
        7. **`App.js`**: Main React app component with routing  
        8. **`index.js`**: Entry point for the React app  

3. **`vite.config.js`**: Sets up a React project with a proxy that redirects API requests from `localhost:3000/api` to `localhost:5000`, enabling backend communication during development.
