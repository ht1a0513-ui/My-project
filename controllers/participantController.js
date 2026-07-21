import { participants } from '../data/participants.js';

const writeResponse = (res, statusCode, payload) => {
  res.status(statusCode).json(payload);
};

export const getAllParticipants = (req, res) => {
  writeResponse(res, 200, {
    success: true,
    count: participants.length,
    data: participants,
  });
};

export const getParticipantById = (req, res) => {
  const participantId = Number(req.params.id);
  const participant = participants.find((item) => item.id === participantId);

  if (!participant) {
    return writeResponse(res, 404, {
      success: false,
      message: 'Participant not found for the given ID',
    });
  }

  return writeResponse(res, 200, {
    success: true,
    data: participant,
  });
};

export const createParticipant = (req, res) => {
  const newParticipant = {
    id: participants.length ? participants[participants.length - 1].id + 1 : 1,
    ...req.body,
  };

  participants.push(newParticipant);

  return writeResponse(res, 201, {
    success: true,
    message: 'Participant created successfully',
    data: newParticipant,
  });
};

export const updateParticipant = (req, res) => {
  const participantId = Number(req.params.id);
  const participantIndex = participants.findIndex((item) => item.id === participantId);

  if (participantIndex === -1) {
    return writeResponse(res, 404, {
      success: false,
      message: 'Participant not found for the given ID',
    });
  }

  participants[participantIndex] = {
    ...participants[participantIndex],
    ...req.body,
    id: participantId,
  };

  return writeResponse(res, 200, {
    success: true,
    message: 'Participant updated successfully',
    data: participants[participantIndex],
  });
};

export const deleteParticipant = (req, res) => {
  const participantId = Number(req.params.id);
  const participantIndex = participants.findIndex((item) => item.id === participantId);

  if (participantIndex === -1) {
    return writeResponse(res, 404, {
      success: false,
      message: 'Participant not found for the given ID',
    });
  }

  const [removedParticipant] = participants.splice(participantIndex, 1);

  return writeResponse(res, 200, {
    success: true,
    message: 'Participant deleted successfully',
    data: removedParticipant,
  });
};

export const searchParticipants = (req, res) => {
  const { name, eventName, status, sort } = req.query;
  let filteredParticipants = [...participants];

  if (name) {
    filteredParticipants = filteredParticipants.filter((item) =>
      item.name.toLowerCase().includes(String(name).toLowerCase())
    );
  }

  if (eventName) {
    filteredParticipants = filteredParticipants.filter((item) =>
      item.eventName.toLowerCase().includes(String(eventName).toLowerCase())
    );
  }

  if (status) {
    filteredParticipants = filteredParticipants.filter((item) =>
      item.status.toLowerCase() === String(status).toLowerCase()
    );
  }

  if (sort === 'asc') {
    filteredParticipants.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === 'desc') {
    filteredParticipants.sort((a, b) => b.name.localeCompare(a.name));
  }

  return writeResponse(res, 200, {
    success: true,
    count: filteredParticipants.length,
    data: filteredParticipants,
  });
};
