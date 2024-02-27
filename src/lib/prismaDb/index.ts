import { PrismaClient} from '@prisma/client';


// const prisma: PrismaClient = new PrismaClient();

// export default prisma;

let prisma: PrismaClient;

function getPrismaClient(){
  if(!prisma){
    prisma = new PrismaClient();
  }

  return prisma;
}


export default getPrismaClient();




