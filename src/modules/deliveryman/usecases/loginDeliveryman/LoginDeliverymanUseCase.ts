import { prisma } from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { ILoginDeliveryman } from "./ILoginDeliveryman";

export class LoginDeliverymanUseCase {
    async execute({ username, password }: ILoginDeliveryman) {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })
        if (!deliveryman) {
            throw new Error("Sorry, you entered an incorrect email address or password. Please try again.")
        }

        const passwordMatch = await compare(password, deliveryman.password);

        if (!passwordMatch) {
            throw new Error("Sorry, you entered an incorrect email address or password. Please try again.")
        }

        const token = sign({ username }, "yourkeyhere", {
            subject: deliveryman.id,
            expiresIn: "1d"
        })

        return token;

    }
}
