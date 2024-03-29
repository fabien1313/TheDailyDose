const { Model, DataTypes } = require('sequelize');// import the Model and DataTypes objects from the sequelize package
const bcrypt = require('bcrypt');// import the bcrypt package
const sequelize = require('../config/connection');// import the sequelize connection from the config folder

class User extends Model {// create the User model by extending the Model class from sequelize package
    checkPassword(loginPw) {// checkPassword from bcrypt is used to compare the password entered by the user at login with the hashed password stored in the database
        return bcrypt.compareSync(loginPw, this.password);// compareSync() returns true if the passwords match, otherwise it returns false
    }
}

User.init(// initialize the User model by calling the init() method on the User class
    {
        id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            // allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                len: [6],
            },
        },
    },
    {
        hooks: {// define the hooks object to run the beforeCreate() method before a new user is created
            async beforeCreate (newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate (updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }

        },
        sequelize, // pass in the sequelize connection
        timestamps: false, // disable the timestamps
        freezeTableName: true, // disable the pluralization of the table name
        underscored: true, // enable the use of underscores instead of camel-casing
        modelName: 'User', // set the model name to user
    }
);

module.exports = User;// export the User model to be used in other parts of the application