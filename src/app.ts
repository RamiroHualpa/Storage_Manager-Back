import express from 'express';
import dotenv from 'dotenv';
import productoRoutes from './routes/producto.routes';

dotenv.config();

const app = express();
app.use(express.json());

// Rutas
app.use('/api', productoRoutes);

export default app;
