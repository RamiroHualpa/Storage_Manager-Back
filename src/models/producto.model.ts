import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Tipos para TypeScript
interface ProductoAttributes {
  id_producto: number;
  nombre: string;
  sku: string;
  categoria_id?: number;
  unidad_medida?: string;
  precio_base?: number;
  activo?: boolean;
}

interface ProductoCreationAttributes extends Optional<ProductoAttributes, 'id_producto'> {}

class Producto extends Model<ProductoAttributes, ProductoCreationAttributes> implements ProductoAttributes {
  public id_producto!: number;
  public nombre!: string;
  public sku!: string;
  public categoria_id?: number;
  public unidad_medida?: string;
  public precio_base?: number;
  public activo?: boolean;
}

Producto.init(
  {
    id_producto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sku: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
    },
    unidad_medida: {
      type: DataTypes.STRING,
    },
    precio_base: {
      type: DataTypes.DECIMAL(10, 2),
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Producto',
    tableName: 'Productos',
    timestamps: false,
  }
);

export default Producto;
