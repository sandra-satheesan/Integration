# Full Stack React + Node Setup

## Step 1: Create Main Project Folder

```bash
mkdir my-fullstack-app
cd my-fullstack-app
```

---

## Step 2: Create Frontend Using Vite

```bash
npm create vite@latest frontend
```

Selected:
- React
- JavaScript

Install dependencies:

```bash
cd frontend
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## Step 3: Create Backend

Open another terminal:

```bash
cd ..
mkdir backend
cd backend
```

Initialize backend:

```bash
npm init -y
```

Install packages:

```bash
npm install express cors nodemon
```

---

## Step 4: Create Express Server

Created `server.js`

---

## Step 5: Add Start Script

Updated `package.json`

```json
"scripts": {
  "start": "nodemon server.js"
}
```

Run backend:

```bash
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Step 6: Connect Frontend to Backend

Frontend successfully receives data from backend.

---

# Concepts Learned

- React frontend setup
- Node + Express backend setup
- API creation
- `fetch()` requests
- `useEffect()`
- CORS
- JSON response handling
- Connecting frontend and backend