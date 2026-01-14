# MongoDB Setup - Express API

## Simple App Overview

```
┌─────────────────┐
│   Express API   │
│   Port: 3000    │
└────────┬────────┘
         │
         │ connects to
         ▼
┌─────────────────┐
│   MongoDB       │
│   Database      │
│   (wine DB)     │
└─────────────────┘
```

## What This App Does

1. **Express Server** - Runs on `http://localhost:3000`
2. **MongoDB Connection** - Connects to MongoDB using connection string from `.env`
3. **Database** - Uses the `wine` database
4. **API Endpoint** - `GET /` returns a success message

## Tech Stack

- Node.js + Express
- MongoDB (native driver)
- dotenv (environment variables)
- nodemon (development)

## How It Works

```
1. Load environment variables (.env)
2. Create Express app
3. Connect to MongoDB
4. Ping database to verify connection
5. Start Express server
6. Keep MongoDB connection alive
```