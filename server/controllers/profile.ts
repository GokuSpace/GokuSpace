import { Request, Response } from 'express';
import { queryUserById, updateUser } from '../models/profile';
import { User } from '@prisma/client';

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

  updateUserById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, favoriteAnimeId, favoriteCharacterId, bio, posts, pictures }: Partial<User> = req.body; //how do I handle updating posts...

    try {
      const user = await queryUserById(id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const updatedUser = await updateUser(id, {
        username,
        favoriteAnimeId,
        favoriteCharacterId,
        bio,
        posts,
        pictures,
      });

      if (!updatedUser) {
        return res.status(500).json({ error: 'Failed to update user' });
      }

      return res.json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      return res.status(500).json({ error: 'INTERNAL SERVICE ERROR FROM updateUserById' });
    }
  }

}
