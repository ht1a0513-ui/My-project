# Event Registration Backend

## Architecture

This backend uses Node.js, Express, and Mongoose to provide a scalable REST API for event registration participants.

### Project structure

- `server.js` – starts the server and initializes MongoDB.
- `app.js` – builds the Express application and mounts route modules.
- `controllers/` – contains business logic for CRUD operations.
- `routes/` – defines the resource endpoints.
- `models/` – Mongoose schema and collection model.
- `config/` – database connectivity configuration.
- `middleware/` – validation, logging, and centralized error handling.

## MongoDB Schema

### Participant

- `name` – string, required
- `email` – string, required, unique, validated format
- `phone` – string, required, validated format
- `eventName` – string, required
- `status` – enum (`confirmed`, `pending`, `cancelled`)
- timestamps enabled automatically

## Endpoints

### GET /participants
Returns all participants with pagination and optional filters.

Query parameters:
- `page` (default: 1)
- `limit` (default: 10)
- `name`
- `eventName`
- `status`
- `sort=asc|desc`

### GET /participants/:id
Returns a single participant by ID.

### POST /participants
Creates a participant.

### PUT /participants/:id
Updates a participant.

### DELETE /participants/:id
Deletes a participant.

### GET /participants/search
Searches participants using optional query filters.

## Postman Testing

Use Postman to send requests against the running server:

1. Start the backend using `npm run dev`.
2. Import the collection and test the CRUD endpoints.
3. Verify expected status codes such as `200`, `201`, `404`, and `400`.

## Notes

- Store credentials in `.env` and never commit them to GitHub.
- Mongoose validation and timestamps are already enabled in the schema.
