import Property from "../../models/property.js"


// createProperty
export const createProperty = async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err.message);
        
        
    }
}

// updateProperty
export const updateProperty = async (req, res) => {
    try {
        const { title, description, price, location} = req.body;

     // Handle validation

     // Check for required fields
        // if (!title ||!description ||!price ||!location ||!password) {
        //     return res.status(400).json({ msg: 'Please enter all fields' });
        // }
        if(!title){
            return res.status(400).json({ success: false, message: "title name is required." });
        },
        if(!description){
            return res.status(400).json({ success: false, message: "description name is required." });
        },
        if(!price){
            return res.status(400).json({ success: false, message: "price name is required." });
        },
        if(!location){
            return res.status(400).json({ success: false, message: "location name is required." });
        }

        

    } catch (err) {
        console.log(err.message);
        
        
    }
}

// getAllProperties
export const getAllProperties = async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err.message);
        
        
    }
}

// getPropertyById
export const getPropertyById = async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err.message);
        
        
    }
}

// filterProperties
export const filterProperties = async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err.message);
        
        
    }
}

// deleteProperty
export const deleteProperty = async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err.message);
        
        
    }
}

export const searchProperty = async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err.message);
        
        
    }
}