import app from './app';
import sequelize from './config/database';

const PORT = process.env.PORT || 3000;
sequelize
  .authenticate()
  .then(() => console.log('Conexión establecida con éxito'))
  .catch((err) => console.error('No se pudo conectar a la base de datos:', err));


sequelize.sync({ force: false }).then(() => {
  console.log('Conexión con la base de datos establecida');
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
