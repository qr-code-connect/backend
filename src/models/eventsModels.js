import { DataTypes} from "sequelize";
import { database } from "../config/database.js";
import Company from "./companyModel.js";


const Event = database.define('Events', {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true
    },
    date_time:{
        type:DataTypes.DATE,
        allowNull:false
    },
    number_tickets:{
        type:DataTypes.NUMBER,
    },
    id_company:{
        type:DataTypes.UUID,
        allowNull:true,
        references:{
            model:'Companies',
            key:'id'
        },
        onDelete:"CASCADE"
    },
})

Event.hasOne(Company,{foreignKey:"id_company"});


export default Event;