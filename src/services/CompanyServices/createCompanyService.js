import Company from "../../models/companyModel.js'";


const createCompanyService = async (companyData,customerId,addressId) => {
    return await Company.create({
        ...companyData,
        id_customer:customerId,
        id_address:addressId
    })    
}


export default createCompanyService;