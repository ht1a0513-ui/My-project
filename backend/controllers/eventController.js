import Event from "../models/Event.js";

export const getEvents = async (req, res) => {
  const events = await Event.find();

  res.status(200).json(events);
};

export const getEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);

  res.status(200).json(event);
};

export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);

  res.status(201).json(event);
};

export const updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.json(event);
};

export const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);

  res.json({
    message: "Event Deleted Successfully",
  });
};