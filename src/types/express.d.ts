declare global {
    namespace Express {
      interface Request {
        user?: any; // Cambia `any` por un tipo más específico si tienes un modelo de usuario definido.
      }
    }
  }
  