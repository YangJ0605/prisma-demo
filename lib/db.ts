import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

db.$connect().catch(err => {
  console.log('error connecting to db', err)
})

export default db
