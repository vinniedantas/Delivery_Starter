import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";
import { IRegisterDeliveryman } from "./IRegisterDeliveryman";


export class RegisterDeliverymanUseCase {
    async execute({ username, password }: IRegisterDeliveryman) {
        const deliverymanExists = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive',
                },
            },
        });

        if (deliverymanExists) {
            throw new Error("Deliveryman Already registered")
        }

        const hashPassword = await hash(password, 10)

        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword,
            },
        });
        return deliveryman
    }
}