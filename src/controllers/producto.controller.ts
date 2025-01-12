import { Request, Response } from 'express';
import Producto from '../models/producto.model';

export async function crearProducto(req: Request, res: Response) {
  try {
    const { nombre, sku, categoria_id, unidad_medida, precio_base } = req.body;

    const producto = await Producto.create({
      nombre,
      sku,
      categoria_id,
      unidad_medida,
      precio_base,
    });

    return res.status(201).json({ message: 'Producto creado con éxito', producto });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el producto', error });
  }
}
