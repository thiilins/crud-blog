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
      tableName: "comments",
      timestamps: true,
    }
  );
  return Comment;
};
