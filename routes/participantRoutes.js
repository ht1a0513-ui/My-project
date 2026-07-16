import { Router } from 'express';
import {
  getAllParticipants,
  getParticipantById,
  createParticipant,
  updateParticipant,
  deleteParticipant,
  searchParticipants,
} from '../controllers/participantController.js';
import { validateParticipantPayload } from '../middleware/validator.js';

const router = Router();

router.get('/search', searchParticipants);
router.get('/', getAllParticipants);
router.get('/:id', getParticipantById);
router.post('/', validateParticipantPayload, createParticipant);
router.put('/:id', validateParticipantPayload, updateParticipant);
router.delete('/:id', deleteParticipant);

export default router;
