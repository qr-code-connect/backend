import createCategoryService from "../services/CategoryServices/createCategoryServices.js";




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
    createCaTegory
}
