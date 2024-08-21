import express from 'express';
import dotenv from 'dotenv';

import routeInvites from './routes/invites.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/', routeInvites);

export default app;
