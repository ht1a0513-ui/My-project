import Registration from "../models/Registration.js";

export const getRegistrations = async (req, res) => {
  const registrations = await Registration.find()
    .populate("participant")
    .populate("event");

  res.json(registrations);
};

export const createRegistration = async (req, res) => {
  const registration = await Registration.create(req.body);

  res.status(201).json(registration);
};

export const deleteRegistration = async (req, res) => {
  await Registration.findByIdAndDelete(req.params.id);

  res.json({
    message: "Registration Deleted",
  });
};