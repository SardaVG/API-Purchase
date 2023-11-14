import express from "express";
import { AppDataSource } from './index'
import userRoutes from './routes/user.routes';
import { User } from './entities/User';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

AppDataSource.then(async(connection) => {
    console.log('Connected to supermarket Database')

    app.use('/api', userRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    });
}).catch(error => console.error('Error connecting to supermarket', error));