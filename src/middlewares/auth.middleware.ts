import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        roles: string[];
      };
    }
  }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretKey') as any;
    req.user = { id: decoded.id, roles: decoded.roles }; // Asume que el token contiene `id` y `roles`
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token no válido' });
  }
}
