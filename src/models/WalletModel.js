import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

const Wallet = database.define('Wallets', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'Wallets'
});

export default Wallet;