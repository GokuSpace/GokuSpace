import prisma from '../../lib';
import { User } from '@prisma/client';

export async function queryUserById(userId: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      accountId: true,
      firstName: true,
      lastName: true,
      username: true,
      pictures: true,
      favoriteAnimeId: true,
      favoriteCharacterId: true,
      bio: true,
      //zipcode doesn't work for some reason???????
      latitude: true,
      longitude: true,
      lastVoteTime: true,
      watchingNowId: true,
      watchSelectionTime: true,
      chatsStarted: true,
      eventsCreated: true,
      receivedFriendRequests: true,
      sendFriendRequests: true,
      posts: true,
      account: true,
      votingHistory: true,
      eventsAttending: true,
      chatsInvitedTo: true,
    },
  });
}

export async function updateUser(userId: string, updates: Partial<User>): Promise<User | null> {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updates,
    });

    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
}



module.exports = {
  queryUserById,
  updateUser
};