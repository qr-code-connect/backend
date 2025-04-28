import Customer from "../../models/CustomerModel.js";
import bcrypt from 'bcrypt';

const createCustomerService = async (customerData) => {
    try {
        const existingCustomer = await Customer.findOne({ where: { email: customerData.email } });
        if (existingCustomer) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(customerData.password, 10);
        const newCustomerData = { ...customerData, password: hashedPassword };

        const newCustomer = await Customer.create(newCustomerData);

        return newCustomer;
    } catch (error) {
        throw new Error(`Error creating customer: ${error.message}`);
    }
};

export default createCustomerService;