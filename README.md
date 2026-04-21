# Future Interns Portfolio

This is a personal portfolio website template built for the Future Interns internship task.

## Features
- Responsive navigation and layout
- About, Projects, Skills and Experience, Contact sections
- Secure contact form with Node.js backend, MongoDB storage, and email notifications
- Mobile-friendly menu toggling

## Files
- `index.html`: site structure
- `styles.css`: site styling
- `script.js`: interactive behavior
- `server.js`: Node.js Express backend
- `models/Contact.js`: MongoDB contact model
- `package.json`: backend dependencies
- `.env`: environment variables

## Setup and Run Locally

### Prerequisites
- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/)
- **MongoDB**: Download and install from [mongodb.com](https://www.mongodb.com/try/download/community). Start MongoDB service locally, or use MongoDB Atlas (cloud).

### Backend Setup
1. Install dependencies: `npm install`
2. Set up environment variables in `.env`:
   - `MONGODB_URI`: Your MongoDB connection string (e.g., `mongodb://localhost:27017/portfolio` for local, or Atlas URI)
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password (enable 2FA and generate app password)
3. Start MongoDB if running locally: `mongod` (in a separate terminal)
4. Start the backend: `npm run dev` (uses nodemon for auto-restart)

### Frontend
1. Open `index.html` in your browser.
2. Or in VS Code: Install "Live Server" extension and click "Go Live".

## Contact Form
- Validates input on server-side
- Stores messages in MongoDB
- Sends email notification to you
- Rate limited to prevent spam

## Optional next steps
- Add more project cards and images.
- Add a dark/light theme toggle.
- Deploy to GitHub Pages (frontend) and Heroku/Render (backend).
- Deploy to Netlify / Vercel (simple drag & drop or Git CI).
