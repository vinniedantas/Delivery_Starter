import { Router } from "express";
import { RegisterDeliverymanController } from "../../modules/deliveryman/usecases/registerDeliveryman/RegisterDeliverymanController";
import { LoginDeliverymanController } from "../../modules/deliveryman/usecases/loginDeliveryman/LoginDeliverymanController";
import { UpdateDeliverymanController } from "../../modules/deliveryman/usecases/updateDeliveryman/UpdateDeliverymanController";
import { ensureAuthenticateDeliveryman } from "../middlewares/auth/ensureAuthenticateDeliveryman";

const deliverymanroutes = Router();

const registerDeliverymanController = new RegisterDeliverymanController();
const loginDeliverymanController = new LoginDeliverymanController();
const updateDeliverymanController = new UpdateDeliverymanController();


deliverymanroutes.post("/api/deliveryman", registerDeliverymanController.handle);
deliverymanroutes.post("/api/deliveryman/login", loginDeliverymanController.handle);
deliverymanroutes.put("/api/deliveryman/update/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)

export { deliverymanroutes };