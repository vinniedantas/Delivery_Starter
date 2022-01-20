import { prisma } from "../../../../database/prismaClient";
import { IUpdateDeliveryEndDate } from "./IUpdateDeliveryEndDate";

export class UpdateDeliveryEndDateUseCase {
        async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryEndDate) {
            const result = await prisma.deliveries.updateMany({
                where: {
                    id: id_delivery,
                    id_deliveryman,
                },
                data: {
                   ended_at: new Date()
                },
            });
            return result
        }
    }