import user from "../model/userModel.js";

export const create = async (req, res) => {
    try {
        const userData = new user(req.body);
        if (!userData) {
            return res.status(404).json("Data not found");
        }

        const response = await userData.save();

        return res.status(200).json({ res: response, msg: "User added successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ Err: error });
    }
}

export const getAll = async (req, res) => {
    try {
        const userData = await user.find();
        if (!userData) {
            return res.status(404).json({ err: "Data not found" });
        }
        return res.status(200).json({ res: userData });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ Err: error });
    }
}

export const getOne = async (req, res) => {
    try {
        const userData = await user.findById(req.params.id);
        if (!userData) {
            return res.status(404).json({ err: "Data not found" });
        }
        return res.status(200).json({ res: userData });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ Err: error });
    }
}



export const update = async (req, res) => {
    try {
        const userData = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!userData) {
            return res.status(404).json({ err: "Data not found" });
        }
        return res.status(200).json({ res: userData, msg: "User updated successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ Err: error });
    }
}

export const Delete = async (req, res) => {
    try {
        const userData = await user.findByIdAndDelete(req.params.id);
        if (!userData) {
            return res.status(404).json({ err: "Data not found" });
        }
        return res.status(200).json({ res: userData, msg: "User Deleted Successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ Err: error });
    }
}


