import { auth } from '@clerk/nextjs'
import { prisma } from './db'

export const getUserByClerkId = async () => {
  const { userId } = auth()

  const user = prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  })
  return user
}
