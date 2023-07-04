import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import {postRoutes, userRoutes} from './routes';

const PORT = process.env.PORT || 8080;

const application = express();

application.use(morgan('common'));
application.use(helmet());
application.use(cors());

application.use('/users', userRoutes);
application.use('/posts', postRoutes);

application.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});
