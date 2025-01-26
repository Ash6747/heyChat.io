# HeyChat.io

✨ **HeyChat.io** is a sleek, real-time chat application built for instant communication. With Firebase as its backend, SCSS for styling, and React for its frontend, HeyChat.io ensures a seamless and dynamic messaging experience. ✨

## Features 🔧

- ✉ **Real-Time Messaging**: Instant conversations powered by Firebase's robust real-time database.
- 🔐 **User Authentication**: Secure and fast authentication via Firebase.
- 📺 **Responsive UI**: Designed for optimal performance across devices.
- 📷 **Media Sharing**: Seamlessly share files and media within chats.
- 🌐 **Lightweight & Scalable**: Leverages Firebase's infrastructure for reliability and scalability.

## Tech Stack 🔄

- **Frontend**:
  - ⚛️ React.js
  - 🎨 SCSS
- **Backend**:
  - 🛠 Firebase (Realtime Database, Authentication, Hosting)

## Hosted URLs 🌐

- **Development**: [HeyChat.io Development](https://webchat-583d0.web.app/)

## Installation 🏠

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Ash6747/heyChat.io.git
   cd heyChat.io
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   - Set up a Firebase project on [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication, Realtime Database, and Hosting.
   - Add your Firebase config to a `.env` file in the root directory:
     ```
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_DATABASE_URL=your-database-url
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

4. **Start the Application**:
   ```bash
   npm start
   ```

## Usage 🚀

- Open `http://localhost:3000` in your browser.
- Register or log in using Firebase Authentication.
- Start chatting in real time! ✨

## Contributing 📚

Contributions are welcome! To contribute:

1. 🔗 Fork the repository.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Open a pull request**.

## License 🔒

This project is licensed under the MIT License. Please look at the [LICENSE](LICENSE) file for details.
