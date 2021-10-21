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
  Post.associate = (models) => {
    Post.belongsTo(models.Category, {
      foreignKey: "category_id",
      as: "category",
    });
    Post.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
    Post.hasMany(models.Comment, {
      foreignKey: "post_id",
      as: "comments",
    });
  };
  return Post;
};
