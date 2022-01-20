import { Router } from "express";
import { ensureAuthenticateClient } from "../middlewares/auth/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "../middlewares/auth/ensureAuthenticateDeliveryman";
import { CreateDeliveryController } from "../../modules/delivery/usecases/createDelivery/CreateDeliveryController";
import { UpdateDeliveryEndDateController } from "../../modules/delivery/usecases/updateDeliveryEndDate/UpdateDeliveryEndDateController";
import { FindAvailableDeliveriesController } from "../../modules/delivery/usecases/findAvailableDeliveries/FindAvailableDeliveriesController";
import { FindDeliveriesByClientIdController } from "../../modules/delivery/usecases/findDeliveriesByClientId/FindDeliveriesByClientIdController";
import { FindDeliveriesByDeliverymanIdController } from "../../modules/delivery/usecases/findDeliveriesByDeliverymanId/FindDeliveriesByDeliverymanIdController";

const deliveryroutes = Router();

const createDeliveryController = new CreateDeliveryController();
const updateDeliveryEndDateController = new UpdateDeliveryEndDateController();
const findAvailableDeliveriesController = new FindAvailableDeliveriesController();
const findDeliveriesByClientIdController = new FindDeliveriesByClientIdController();
const findDeliveriesByDeliverymanIdController = new FindDeliveriesByDeliverymanIdController();


deliveryroutes.post("/api/delivery", ensureAuthenticateClient, createDeliveryController.handle);
deliveryroutes.put("/api/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateDeliveryEndDateController.handle)
deliveryroutes.get("/api/deliveries", ensureAuthenticateDeliveryman, findAvailableDeliveriesController.handle);
deliveryroutes.get("/api/deliveries/client", ensureAuthenticateClient, findDeliveriesByClientIdController.handle);
deliveryroutes.get("/api/deliveries/deliveryman", ensureAuthenticateDeliveryman, findDeliveriesByDeliverymanIdController.handle);


export { deliveryroutes };

