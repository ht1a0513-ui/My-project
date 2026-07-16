const requiredFields = ['name', 'email', 'phone', 'eventName', 'status'];

export const validateParticipantPayload = (req, res, next) => {
  const { name, email, phone, eventName, status } = req.body;

  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({
      success: false,
      message: 'Request body must be a JSON object',
    });
  }

  const missingField = requiredFields.find((field) => !req.body[field]);

  if (missingField) {
    return res.status(400).json({
      success: false,
      message: `Missing required field: ${missingField}`,
    });
  }

  if (typeof name !== 'string' || typeof email !== 'string' || typeof phone !== 'string' || typeof eventName !== 'string' || typeof status !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'All fields must be valid strings',
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format',
    });
  }

  next();
};
