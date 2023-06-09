import { Request, Response } from 'express';
import { queryUserById, handlePostDeletion, updateUserPost, updateProfile } from '../models/profile';
import prisma from '../../lib';
import { User, Post } from '@prisma/client';

export default {

  getUserById: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await queryUserById(id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.json(user);
    } catch (error) {
      console.error('Error retrieving user:', error);
      return res.status(500).json({ error: 'INTERNAL SERVICE ERROR FROM getUserById' });
    }
  },

  // updateUserById: async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   const { username, favoriteAnimeId, favoriteCharacterId, bio, pictures }: Partial<User> = req.body; //how do I handle updating posts...

  //   try {
  //     const user = await queryUserById(id);

  //     if (!user) {
  //       return res.status(404).json({ error: 'User not found' });
  //     }

  //     const updatedUser = await updateUser(id, {
  //       username,
  //       favoriteAnimeId,
  //       favoriteCharacterId,
  //       bio,
  //       pictures,
  //     });

  //     if (!updatedUser) {
  //       return res.status(500).json({ error: 'Failed to update user' });
  //     }

  //     return res.json(updatedUser);
  //   } catch (error) {
  //     console.error('Error updating user:', error);
  //     return res.status(500).json({ error: 'INTERNAL SERVICE ERROR FROM updateUserById' });
  //   }
  // },

  updateIsDeletedByPostId: async (req: Request, res: Response) => {
    try {
      console.log('is this working')
      const { id } = req.params;
      console.log(id)

      const updatedPost = await handlePostDeletion(id);

      if (updatedPost) {
        res.status(200).json({ message: 'Post marked as deleted', post: updatedPost });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error from updateIsDeletedByPostId' });
    }
  },

  updateUserPostById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { body } = req.body;

      const updatedPost = await updateUserPost(id, body);

      if (updatedPost) {
        return res.status(200).json(updatedPost);
      } else {
        return res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateUserProfileById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { username, zipcode, bio } = req.body;

      const updatedProfile = await updateProfile(id, username, zipcode, bio);

      if (updatedProfile) {
        return res.status(200).json(updatedProfile);
      } else {
        return res.status(404).json({ error: 'Profile not found' });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}
