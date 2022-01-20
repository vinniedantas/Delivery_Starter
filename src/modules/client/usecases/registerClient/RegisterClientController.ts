import { Request, Response } from "express";
import { RegisterClientUseCase } from "./RegisterClientUseCase";

export class RegisterClientController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const registerClientUseCase = new RegisterClientUseCase();

        const result = await registerClientUseCase.execute({
            username,
            password
        });
        return response.json(result);
    }
}