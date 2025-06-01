import Category from "../../models/categoryModel.js";

const getAllCategoryService = async (eventId = null) => {
  try {
    const options = {
      order: [['category', 'ASC']],
    };

    console.log("LOGANDO EVENTID",eventId);
    
    if (eventId) {
      options.where = {
        id_event: eventId
      };
    }

    return await Category.findAll(options);
  } catch (error) {
    throw new Error(`Error fetching categories: ${error.message}`);
  }
};
export default getAllCategoryService;