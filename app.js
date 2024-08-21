import express from 'express';
import dotenv from 'dotenv';

import routeInvites from './routes/invites.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/acceuil/', (req, res) => {
    res.status(200).send(`Bienvenue sur notre API.`);
});

app.use('/api/', routeInvites);

export default app;
