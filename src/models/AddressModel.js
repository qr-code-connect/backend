import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

const Address = database.define('Addresses', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    contry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit_number: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    complement: {
        type: DataTypes.STRING,
        allowNull: true
    },
    postal_code: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'Addresses'
});

export default Address;