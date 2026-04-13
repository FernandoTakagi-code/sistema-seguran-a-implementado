import { Router } from "express";


import { CreateUserController } from "./controller/CreateUserController";
import { ListUserController } from "./controller/ListUserController";
import { UpdateUserController } from "./controller/UpdateUserController";
import { DeleteUserController } from "./controller/DeleteUserControler";


import { ForgotPasswordController } from "./controller/password/ForgotPasswordController";
import { ResetPasswordController } from "./controller/password/ResetPasswordController";


import { CreateProfileController } from "./controller/profile/CreateProfileController";
import { ListProfileController } from "./controller/profile/ListProfileController";


import { AuthenticateUserController } from "../src/controller/AuthenticateUserController";


import { ensureAuthenticated } from "./middleware/ensureAutenticated";

const router = Router();


const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

const createProfileController = new CreateProfileController();
const listProfileController = new ListProfileController();

const authenticateUserController = new AuthenticateUserController();


router.post("/login", authenticateUserController.handle);

router.post("/forgot-password", forgotPasswordController.handle);
router.post("/reset-password", resetPasswordController.handle);


router.use(ensureAuthenticated);




router.post("/users", createUserController.handle);
router.get("/users", listUserController.handle);
router.get("/users/:id", listUserController.findById);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);


router.post("/profiles", createProfileController.handle);
router.get("/profiles", listProfileController.handle);
router.get("/profiles/:id", listProfileController.findById); 

export { router };