# online-booking-app
---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js and npm**: Download and install them from [here](https://nodejs.org/).
- **MongoDB**: Ensure it is installed and running. Download it from [here](https://www.mongodb.com/try/download/community).

---

## Installation

### 1. Clone the repository:
\`\`\`bash
git clone https://github.com/FarhathCader/Automated-Grading-for-Programming-Assignments.git
cd online-booking-app
\`\`\`

### 2. Install server dependencies:
\`\`\`bash
cd backend
yarn
\`\`\`

### 3. Install client dependencies:
\`\`\`bash
cd ../frontend
yarn i
\`\`\`

---

## Configuration

Create a `.env` file in the `server` directory and include the following environment variables:

\`\`\`plaintext
PORT = 4000
MONGO_URLL =
JWT_SECRETT =
AWS_BUCKET_NAMEE =
AWS_BUCKET_REGIONN =
AWS_ACCESS_KEYY =
AWS_SECRET_ACCESS_KEYY =
\`\`\`

---

## Running the Application

### 1. Start the backend :
\`\`\`bash
cd backend
nodemon index.js
\`\`\`

### 2. Start the frontend server:
\`\`\`bash
cd ../client
yarn run dev
\`\`\`

## Folder Structure

\`\`\`
Automated-Grading-for-Programming-Assignments/
|
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── index.js
|   ├── package.json
|   ├── vercel.json
│   └── yarn.lock
|   
|
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── Layout.jsx
│   │   ├── main.jsx
│   ├── .env
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.cjs
│   ├── tailwind.config.cjs
│   ├── vercel.json
│   ├── vite.config.js
│   └── yarn.lock
|
├── .gitignore
└── README.md
\`\`\`

---


---

## License

This project is licensed under the [MIT License](LICENSE).
