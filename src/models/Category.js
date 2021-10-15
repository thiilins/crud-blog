module.exports = (connection, DataTypes) => {
  const Category = connection.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(200),
        unique: true,
      },
      enable: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "categories",
      timestamps: true,
    }
  );
  return Category;
};
