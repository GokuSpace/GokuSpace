import prisma from '../../lib';
import { User, Post } from '@prisma/client';

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
      // favoriteAnime: {
      //   select: {
      //     title: true,
      //   },
      // },
      // favoriteCharacter: {
      //   select: {
      //     name: true,
      //   },
      // },
      //the above is throwing me errors saying the mal_id is not defined...
      bio: true,
      zipcode: true,
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

export async function updateUserPosts(postId: string): Promise<Post | null> {
  return prisma.post.update({
    where: { id: postId },
    data: {
      isDeleted: true,
    },
  });
}



module.exports = {
  queryUserById,
  updateUserPosts
};