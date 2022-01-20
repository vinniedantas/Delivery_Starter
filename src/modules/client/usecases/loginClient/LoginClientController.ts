import { Request, Response } from "express";
import { LoginClientUseCase } from "./LoginClientUseCase";

export class LoginClientController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const loginClientUseCase = new LoginClientUseCase();

        const result = await loginClientUseCase.execute({
            username,
            password,
        })

        return response.json(result);
    }
}