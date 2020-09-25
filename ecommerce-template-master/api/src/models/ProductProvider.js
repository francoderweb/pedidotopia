const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("productprovider", {
    fecha_creacion: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    precio: {
      type: DataTypes.REAL,
    },
    productId_Shopify: {
      type: DataTypes.BIGINT,
      defaultValue: null
    },
    productId_Meli: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    link_meli: {
      type: DataTypes.STRING,
    },
    link_shopify: {
      type: DataTypes.STRING,
    },
  });
};
