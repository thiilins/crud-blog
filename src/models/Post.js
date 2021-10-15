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
      active: {
        type: DataTypes.BOOLEAN,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "posts",
      timestamps: true,
    }
  );
  return Post;
};
