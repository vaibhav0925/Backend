import { Promise } from "mongoose"

const asyncHandelaer = (reqestHandeler) => {
    (req, res, next) => {
        Promise.resolve(reqestHandeler(req, res, next)).catch((err) => next(err))
    }
}



export {asyncHandelaer}


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