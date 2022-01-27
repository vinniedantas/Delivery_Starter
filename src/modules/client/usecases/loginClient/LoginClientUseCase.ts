import { prisma } from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { ILoginClient } from "./ILoginClient";

export class LoginClientUseCase {
    async execute({ username, password }: ILoginClient) {
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })
        if (!client) {
            throw new Error("Sorry, you entered an incorrect email address or password. Please try again.")
        }

        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch) {
            throw new Error("Sorry, you entered an incorrect email address or password. Please try again.")
        }

        const token = sign({ username }, "yourkeyhere", {
            subject: client.id,
            expiresIn: "1d"
        })

        return token;


    }
}
