# CyberVault 🔒

A modern, interactive cybersecurity education platform built with React and Firebase. Learn about cybersecurity through an engaging, visually appealing interface.

## Features

- Interactive threat simulations
- Cybersecurity best practices guide
- Hacker profile analysis
- Interactive quiz with risk assessment
- Real-time feedback system
- Responsive design with cyberpunk aesthetics

## Tech Stack

- React 18 with Vite
- Firebase (Firestore & Hosting)
- CSS3 with custom animations
- React Scroll Parallax
- React Icons

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login and deploy:
   ```bash
   firebase login
   npm run build
   firebase deploy
   ```

## License

This project is licensed under the MIT License.

## Security Note

This project is for educational purposes only. The cybersecurity information provided is intended to raise awareness and should not be used for malicious purposes.
