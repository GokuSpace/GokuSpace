import { Router } from 'express';
import controller from './controllers/index';
import friends from './controllers/friends';

const router = Router();

router.get('/accounts', controller.getAccounts);
router.get('/users', controller.getUsers);

//** Friends **//

// Gets friends of user `user_id` with status `status`. Parameters -- status, page, count
router.get('/users/:user_id/friends', friends.getFriends);

// Creates a new friendship connection. Parameters -- none
router.post('/friends/:sender_id/:receiver_id', friends.createFriend);

// Sets status of friends. Parameters -- status
router.put('/friends/status/:sender_id/:receiver_id', friends.setStatus);

// Removes a friendship connection. Parameters -- none
router.delete('/friends/status/:sender_id/:receiver_id', friends.removeFriend);

router.get('/friends', controller.getFriends);
router.get('/posts', controller.getPosts);
router.get('/votes', controller.getVotes);
router.get('/events', controller.getEvents);
router.get('/chatrooms', controller.getChatrooms);
router.get('/messages', controller.getMessages);

export default router;
