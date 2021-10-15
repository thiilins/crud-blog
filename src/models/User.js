module.exports = (connection, DataTypes) => {
  const User = connection.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: {
        type: DataTypes.STRING(200),
      },
      username: {
        type: DataTypes.STRING(200),
        unique: true,
      },
      password: {
        type: DataTypes.STRING(200),
      },
      github: {
        type: DataTypes.STRING(200),
      },
      linkedin: {
        type: DataTypes.STRING(200),
      },
      bio: {
        type: DataTypes.TEXT("medium"),
      },
      enable: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );
  return User;
};
