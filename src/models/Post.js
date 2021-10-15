module.exports = (connection, DataTypes) => {
  const Post = connection.define(
    "Post",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING(500),
      },
      content: {
        type: DataTypes.TEXT("long"),
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
      enable: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "posts",
      timestamps: true,
    }
  );
  return Post;
};
