import { prisma } from "../../../../database/prismaClient";
import { IUpdateDeliveryman } from "./IUpdateDeliveryman";

export class UpdateDeliverymanUseCase {
    async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
        const result = await prisma.deliveries.update({
            where: {
                id: id_delivery
            },
            data: {
                id_deliveryman
            },
        });
        return result
    }
}