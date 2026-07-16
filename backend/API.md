# Event Registration API Documentation

## Base URL

http://localhost:5000

## Endpoints

### GET /
Returns a welcome message and a list of available routes.

### GET /participants
Returns all participants in JSON format.

### GET /participants/:id
Returns a specific participant by ID.

### POST /participants
Creates a new participant.

Required body fields:
- name
- email
- phone
- eventName
- status

### PUT /participants/:id
Updates an existing participant by ID.

### DELETE /participants/:id
Deletes a participant by ID.

### GET /participants/search?name=value
Searches participants by name. Supports optional query filters:
- name
- eventName
- status
- sort=asc|desc

## Example JSON

{
  "name": "Aarav Sharma",
  "email": "aarav@example.com",
  "phone": "9876543210",
  "eventName": "Tech Summit",
  "status": "confirmed"
}
