import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";
import { IRegisterClient } from "./IRegisterClient";

export class RegisterClientUseCase {
    async execute({ username, password }: IRegisterClient) {
        const clientExists = await prisma.clients.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive',
                },
            },
        });

        if (clientExists) {
            throw new Error("Client Already registered")
        }

        const hashPassword = await hash(password, 10)

        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword,
            },
        });
        return client;
    }
}
