import express from 'express';
import participantRoutes from './routes/participantRoutes.js';
import { logger } from './middleware/logger.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();

app.use(logger);
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Event Registration API',
    developer: 'Node.js + Express REST backend',
    database: 'MongoDB Atlas + Mongoose',
    routes: {
      participants: '/participants',
      search: '/participants/search?name=value',
      pagination: '/participants?page=1&limit=10',
    },
  });
});

app.use('/participants', participantRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
