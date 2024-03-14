import { asyncHandeler} from "./utils/AsyncHandeler.js";


const registerUser = asyncHandeler(async(req, res) => {
    res.status(200).json({
        message: "OK"
    })
})


export {registerUser}