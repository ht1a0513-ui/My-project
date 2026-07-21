# Event Registration API Documentation

## Base URL

http://localhost:5000

## Endpoints

### GET /
Returns a welcome message and a list of available routes.

### GET /participants
Returns paginated participant records from MongoDB.

Query parameters:
- `page` (default: `1`)
- `limit` (default: `10`)
- `name`
- `eventName`
- `status`
- `sort=asc|desc`

### GET /participants/:id
Returns a specific participant by ID.

### POST /participants
Creates a new participant document.

Required body fields:
- `name`
- `email`
- `phone`
- `eventName`
- `status`

### PUT /participants/:id
Updates an existing participant document by ID.

### DELETE /participants/:id
Deletes a participant document by ID.

### GET /participants/search
Searches participants by optional query filters:
- `name`
- `eventName`
- `status`
- `sort=asc|desc`

## Example JSON

{
  "name": "Aarav Sharma",
  "email": "aarav@example.com",
  "phone": "9876543210",
  "eventName": "Tech Summit",
  "status": "confirmed"
}

## Notes

- The backend now uses Mongoose and MongoDB Atlas.
- Validate the `.env` file with a real MongoDB connection string before starting the server.
- Use Postman to verify `200`, `201`, `400`, `404`, and `409` responses.
