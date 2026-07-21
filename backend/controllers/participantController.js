import Participant from "../models/Participant.js";

export const getParticipants = async (req, res) => {
  const participants = await Participant.find();

  res.json(participants);
};

export const getParticipant = async (req, res) => {
  const participant = await Participant.findById(req.params.id);

  res.json(participant);
};

export const createParticipant = async (req, res) => {
  const participant = await Participant.create(req.body);

  res.status(201).json(participant);
};

export const updateParticipant = async (req, res) => {
  const participant = await Participant.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(participant);
};

export const deleteParticipant = async (req, res) => {
  await Participant.findByIdAndDelete(req.params.id);

  res.json({
    message: "Participant Deleted",
  });
};
