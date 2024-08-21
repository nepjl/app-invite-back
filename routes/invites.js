import express from 'express';
const route = express.Router();
import { creeInvite, getAllInvites, getInviteById, deleteInvite } from '../controllers/controllersInvites.js';

route.post('/invites', creeInvite);
route.get('/invites', getAllInvites);
route.get('/invites/:id', getInviteById);
route.delete('/invites/:id', deleteInvite);

export default route;
