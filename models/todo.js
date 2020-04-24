'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}

  Todo.init({
    // attributes
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'title is required'
        },
        notNull: {
          args: true,
          msg: 'title is required'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'description is required'
        },
        notNull: {
          args: true,
          msg: 'description is required'
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isAfter: {
          args: `${new Date().toLocaleDateString()}`,
          msg: "The date entered is already past"
        },
        notEmpty: {
          args: true,
          msg: 'due date is required'
        },
        notNull: {
          args: true,
          msg: 'due date is required'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Todo'
    // options
  })
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  };
  return Todo;
};