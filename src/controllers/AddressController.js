import updateAddressService from "../services/AddressServices/updateAddressService.js";
import deleteAddressService from "../services/AddressServices/deleteAddressService.js";

const updateAddress = async (req, res) => {
    try {
        const addressId = req.params.id;
        const updatedData = req.body;

        const address = await updateAddressService(addressId, updatedData);
        res.status(200).json(address);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

const deleteAddress = async (req, res) => {
    try {
        const addressId = req.params.id;

        const result = await deleteAddressService(addressId);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

export {
    updateAddress,
    deleteAddress
};
