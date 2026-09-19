# Queue_Management_System
# Hospital Queue Management System

A web-based Hospital Queue Management System designed to help patients manage hospital queues efficiently and allow hospital staff to monitor and manage patient flow.

## Project Overview

The system allows patients to:

* Register and log in
* View available doctors and departments
* Join a queue
* Receive a queue/token number
* View their position in the queue
* Check estimated waiting time
* View queue status

Hospital staff/admin can:

* Manage doctors and departments
* View current queues
* Manage patient queue status
* Update queue information
* Monitor patient flow

## Technology Stack

### Frontend

* React.js
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* Supabase
* PostgreSQL

### Development Tools

* Visual Studio Code
* Git
* GitHub
* GitHub Desktop

## Project Structure

```text
hospital-queue-system/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── routes/
│   │   ├── queueRoutes.js
│   │   ├── patientRoutes.js
│   │   └── adminRoutes.js
│   │
│   ├── controllers/
│   │   ├── queueController.js
│   │   ├── patientController.js
│   │   └── adminController.js
│   │
│   ├── config/
│   │   └── supabase.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── database/
│   ├── schema.sql
│   ├── seed.sql
│   ├── migrations/
│   │   ├── 001_create_users.sql
│   │   ├── 002_create_doctors.sql
│   │   ├── 003_create_queues.sql
│   │   └── 004_create_predictions.sql
│   │
│   └── README.md
│
├── .gitignore
└── README.md
```

## Database

The project uses **Supabase PostgreSQL**.

### Main Tables

#### Users

Stores patient and admin information.

* `id`
* `name`
* `email`
* `phone`
* `role`
* `created_at`

#### Doctors

Stores doctor information.

* `id`
* `name`
* `department`
* `available`

#### Queues

Stores patient queue information.

* `id`
* `patient_id`
* `doctor_id`
* `token_number`
* `status`
* `joined_time`

#### Queue Prediction

Stores estimated waiting time information.

* `id`
* `patient_id`
* `queue_id`
* `estimated_time`

## Setting Up Supabase

1. Create an account at [Supabase](https://supabase.com/).
2. Create a new project.
3. Open the **SQL Editor**.
4. Run the SQL from:

```text
database/schema.sql
```

5. If sample data is required, run:

```text
database/seed.sql
```

6. Obtain the Supabase project URL and API key from the project settings.

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_api_key
PORT=5000
```

Start the backend:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

## Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on the local development URL shown by Vite.

## API Structure

The backend provides APIs for:

### Patient

```text
POST   /patients
GET    /patients/:id
```

### Queue

```text
GET    /queues
POST   /queues
PUT    /queues/:id
DELETE /queues/:id
```

### Admin

```text
GET    /admin/queues
PUT    /admin/queues/:id
```

The exact endpoints may be updated as development progresses.

## Git Workflow

Each team member should work on a separate feature or branch.

Before starting work:

```bash
git pull
```

After completing a meaningful feature:

```bash
git add .
git commit -m "Meaningful description of the change"
git push
```

### Example Commits

```text
Initial project structure setup
Added Supabase database schema
Added doctor and patient tables
Implemented queue CRUD APIs
Created patient dashboard
Created admin dashboard
Connected frontend with backend
Added queue waiting-time calculation
Fixed queue management bugs
```

Avoid vague commit messages such as:

```text
changes
update
final
done
```

## Team Roles

| Member   | Responsibility                      |
| -------- | ----------------------------------- |
| Member 1 | Project setup and GitHub management |
| Member 2 | Supabase database and SQL           |
| Member 3 | Backend queue APIs                  |
| Member 4 | Authentication and admin APIs       |
| Member 5 | Patient frontend                    |
| Member 6 | Admin frontend and integration      |

## Development Flow

```text
React Frontend
       ↓
Express Backend
       ↓
Supabase Client
       ↓
Supabase PostgreSQL
```

## Future Improvements

* Real-time queue updates
* Multiple department queues
* Estimated waiting-time calculation
* Queue recommendation
* Notifications for patients
* Doctor availability management
* Admin analytics dashboard

## Team

Developed as a team project for a hackathon.

## License

This project is developed for educational and hackathon purposes.