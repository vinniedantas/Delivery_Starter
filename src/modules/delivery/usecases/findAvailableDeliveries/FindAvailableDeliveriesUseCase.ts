import { prisma } from "../../../../database/prismaClient"

export class FindAvailableDeliveriesUseCase {

    async execute() {

        const deliveries = await prisma.deliveries.findMany({
            where: {
                ended_at: null,
                id_deliveryman: null,
            }
        });
        
        return deliveries
    }
}