import { PrismaClient} from '@prisma/client';

const getClient = () => {
  const prisma: PrismaClient = new PrismaClient();

  return prisma;
}


export default getClient();

