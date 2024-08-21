import express from 'express';
const route = express.Router();
import { creeInvite, getAllInvites, getInviteById, deleteInvite } from '../controllers/controllersInvites.js';

route.post('/formulaire/creation', creeInvite);
route.get('/formulaire/invites', getAllInvites);
route.get('/formulaire/invites/:id', getInviteById);
route.delete('/formulaire/supprimer/:id', deleteInvite);

export default route;
