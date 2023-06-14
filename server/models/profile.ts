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
      favoriteAnime: {
        select: {
          title: true,
        },
      },
      favoriteCharater: {
        select: {
          name: true,
        },
      },
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

export async function handlePostDeletion(postId: string): Promise<Post | null> {
  return prisma.post.update({
    where: { id: postId },
    data: {
      isDeleted: true,
    },
  });
}

export async function updateUserPost(postId: string, body: string): Promise<Post | null> {
  try {
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { body },
    });

    return updatedPost;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateProfile(userId: string, username: string, zipcode: string, bio: string): Promise<User | null> {
  try {
    const updatedProfile = await prisma.user.update({
      where: { id: userId },
      data: {
        username: username ? username : undefined,
        zipcode: zipcode ? zipcode : undefined,
        bio: bio ? bio : undefined,
      },
    });

    return updatedProfile;
  } catch (error) {
    console.log(error);
    return null;
  }
}



module.exports = {
  queryUserById,
  handlePostDeletion,
  updateUserPost,
  updateProfile
};