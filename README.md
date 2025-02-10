# MERN Stack with TypeScript

This is a full-stack MERN (MongoDB, Express, React, Node.js) application built with TypeScript.

## Features

- **Backend:** Express.js with TypeScript, MongoDB, and Mongoose
- **Frontend:** React with TypeScript
- **API Integration:** Axios for making API calls
- **Development:** Nodemon for backend live reload
- **Project Management:** Concurrently to run both frontend and backend together

## Project Structure

```
mern-app/
│-- backend/   # Express + MongoDB (Node.js backend)
│   │   ├── main.ts
│   ├── .env
│   ├── tsconfig.json
│   ├── package.json
│   ├── nodemon.json
│-- frontend/  # React + TypeScript frontend
│   ├── src/
│   │   ├── components/
│   ├── package.json
│   ├── tsconfig.json
│-- package.json (root, manages both frontend & backend)
│-- .gitignore
│-- README.md
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/)

### Installation

Clone the repository:

```sh
git clone https://github.com/IroshanBrian/mern-starter.git
cd mern-starter
```

### Backend Setup

```sh
cd api
npm install
cp .env.example .env # Configure your MongoDB URI
npm run dev
```

### Frontend Setup

```sh
cd ../frontend
npm install
npm start
```

### Running Full Project (Frontend + Backend)

From the root directory:

```sh
npm install
npm start
```

## Environment Variables

Create a `.env` file in the `api/` directory:

```
MONGO_URI=mongodb://localhost:27017/your_db
PORT=3000
```


## License

This project is licensed under the MIT License.

---

Made with ❤️ by [Brian](https://github.com/IroshanBrian)

