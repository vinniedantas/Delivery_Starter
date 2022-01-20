import { Request, Response } from "express";
import { FindDeliveriesByClientIdUseCase } from "./FindDeliveriesByClientIdUseCase";

export class FindDeliveriesByClientIdController {
    
    async handle(request: Request, response: Response) {

        const { id_client } = request;

        const findDeliveriesByClientIdUseCase = new FindDeliveriesByClientIdUseCase();

        const deliveries = await findDeliveriesByClientIdUseCase.execute(id_client);

        return response.json(deliveries);
    }
}