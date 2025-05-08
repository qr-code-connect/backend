import Company from "../../models/companyModel.js";

const getAllCompaniesService = async () => {
    try{
        const companies = await Company.findAll();
        return companies;
    } catch (error) {
        throw new Error(`Error fetching customers: ${error.message}`);
    };
};

export default getAllCompaniesService;