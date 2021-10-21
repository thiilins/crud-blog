module.exports = (connection, DataTypes) => {
  const Comment = connection.define(
    "Comment",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      post_id: {
        type: DataTypes.INTEGER,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
      enable: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "comments",
      timestamps: true,
    }
  );
  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
      onDelete: "cascade",
    });
    Comment.belongsTo(models.Post, {
      foreignKey: "post_id",
      as: "post",
      onDelete: "cascade",
    });
  };
  return Comment;
};
