import { Request, Response } from "express";
import { LoginDeliverymanUseCase } from "./LoginDeliverymanUseCase";

export class LoginDeliverymanController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const loginDeliverymanUseCase = new LoginDeliverymanUseCase();

        const result = await loginDeliverymanUseCase.execute({
            username,
            password,
        })

        return response.json(result);
    }
}