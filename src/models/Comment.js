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
  return Comment;
};
