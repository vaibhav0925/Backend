import { Promise } from "mongoose"

const asyncHandeler = (reqestHandler) => {
    return (req, res, next) => {
        Promise.resolve(reqestHandler(req, res, next)).catch((err) => next(err))
    }
}



export {asyncHandeler}


// const asyncHolder =  () => {}
// const asyncHolder = (func) => () => {}
// const asyncHolder = (func) => async() => {}

// const asyncHandelaer = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(err. code || 500).jso({
//             success: false,
//             message: err.message
//         })
//     }
// }