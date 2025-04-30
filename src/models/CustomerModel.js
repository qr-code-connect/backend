import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

const Customer = database.define('Customers', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('client', 'admin'),
        defaultValue: 'client',
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'Customers'
});

export default Customer;
