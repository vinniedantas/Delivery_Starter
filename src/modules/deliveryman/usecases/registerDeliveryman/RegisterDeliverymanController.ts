import { Request, Response } from "express";
import { RegisterDeliverymanUseCase } from "./RegisterDeliverymanUseCase";

export class RegisterDeliverymanController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const registerDeliverymanUseCase = new RegisterDeliverymanUseCase();

        const result = await registerDeliverymanUseCase.execute({
            username,
            password
        });
        return response.json(result);
    }
}