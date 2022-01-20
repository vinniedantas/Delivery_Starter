import { Request, Response } from "express";
import { FindDeliveriesByDeliverymanIdUseCase } from "./FindDeliveriesByDeliverymanIdUseCase";

export class FindDeliveriesByDeliverymanIdController {
    
    async handle(request: Request, response: Response) {

        const { id_deliveryman } = request;

        const findDeliveriesByDeliverymanIdUseCase = new FindDeliveriesByDeliverymanIdUseCase();

        const deliveries = await findDeliveriesByDeliverymanIdUseCase.execute(id_deliveryman);

        return response.json(deliveries);
    }
}