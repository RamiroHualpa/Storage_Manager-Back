import express from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { authorize } from '../middlewares/roles.middleware';
import { crearProducto } from '../controllers/producto.controller';

const router = express.Router();

// Ruta para crear productos
router.post(
  '/productos',
  authenticate, // Verifica el token JWT
  authorize(['admin', 'AdminProductos']), // Verifica que el usuario tenga uno de los roles permitidos
  crearProducto // Controlador para la creación de productos
);

export default router;
