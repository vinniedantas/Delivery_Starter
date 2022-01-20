import { Request, Response } from "express";
import { UpdateDeliveryEndDateUseCase } from "./UpdateDeliveryEndDateUseCase";


export class UpdateDeliveryEndDateController {

    async handle (request: Request, response: Response) {

        const { id_deliveryman } = request;

        const { id: id_delivery } = request.params;

        const updateDeliveryEndDateUseCase = new UpdateDeliveryEndDateUseCase();

        const delivery =  await updateDeliveryEndDateUseCase.execute({
            id_deliveryman,
            id_delivery
        });
        
        return response.json(delivery);
    }
}