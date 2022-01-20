import { Router } from "express";
import { RegisterClientController } from "../../modules/client/usecases/registerClient/RegisterClientController";
import { LoginClientController } from "../../modules/client/usecases/loginClient/LoginClientController";

const clientroutes = Router();

const registerClientController = new RegisterClientController();
const loginClientController = new LoginClientController();


clientroutes.post("/api/client", registerClientController.handle);
clientroutes.post("/api/client/login", loginClientController.handle);


export { clientroutes };