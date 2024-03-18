import { Router } from "express";
import { LogoutUser, loginUser, registerUser, refreshAccessToken } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )

router.route("/logIn").post(loginUser)

//secured Routes

router.route("/logout").post(verifyJWT, LogoutUser)
router.route("/refresh-token").post(refreshAccessToken)


export default router