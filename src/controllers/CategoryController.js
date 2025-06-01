import createCategoryService from "../services/CategoryServices/createCategoryServices.js";
import getAllCategoryService from "../services/CategoryServices/getAllcategoryService.js";

const getAllCategories = async (req, res) => {
  try {
    const eventId = req.query.eventId; 
    const categories = await getAllCategoryService(eventId);

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching companies', 
      error: error.message 
    });
  }
};


const createCaTegory = async (req, res) => {
    try {
        const categoryData = req.body;
        const newCategory = await createCategoryService(categoryData);

        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({message:'Error creating category', error: error.message});
    }
}


export {
    createCaTegory,
    getAllCategories
}
