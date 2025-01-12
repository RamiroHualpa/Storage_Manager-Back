import { Request, Response, NextFunction } from 'express';

/**
 * Middleware para verificar si el usuario tiene uno de los roles permitidos.
 * @param roles - Lista de roles permitidos.
 */
export function authorize(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Verificar si el usuario está autenticado
    if (!req.user) {
      return res.status(401).json({ message: 'No autenticado' });
    }

    // Verificar si el usuario tiene un rol permitido
    const userRoles = req.user.roles || []; // Asume que req.user.roles es un array de roles
    const hasRole = roles.some((role) => userRoles.includes(role));

    if (!hasRole) {
      return res.status(403).json({ message: 'Acceso denegado' });
    }

    next();
  };
}
