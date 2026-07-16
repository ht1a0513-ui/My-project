import express from 'express';
import participantRoutes from './routes/participantRoutes.js';
import { logger } from './middleware/logger.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger);
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Event Registration API',
    developer: 'Node.js + Express REST backend',
    routes: {
      participants: '/participants',
      search: '/participants/search?name=value',
    },
  });
});

app.use('/participants', participantRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
