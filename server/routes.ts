import { Router } from 'express';
import controller from './controllers/index';
import friends from './controllers/friends';
import events from './controllers/events';

const router = Router();

router.get('/accounts', controller.getAccounts);
router.get('/users', controller.getUsers);

//** Friends **//
router.get('/users/:user_id/friends', friends.getFriends);
router.post('/friends/:sender_id/:receiver_id', friends.createFriend);
router.put('/friends/status/:sender_id/:receiver_id', friends.setStatus);
router.delete('/friends/status/:sender_id/:receiver_id', friends.removeFriend);

//** Events **//
router.get('/users/:user_id/events', events.getEvents);
router.get('/users/:user_id/my_events', events.getUserEvents);
router.get('/events/:event_id', events.getEvent);
router.put('/events/:event_id/rsvp', events.rsvpEvent);
router.post('/events/:user_id', events.createEvent);
router.delete('/events/:event_id', events.deleteEvent);

router.get('/friends', controller.getFriends);
router.get('/posts', controller.getPosts);
router.get('/votes', controller.getVotes);
router.get('/events', controller.getEvents);
router.get('/chatrooms', controller.getChatrooms);
router.get('/messages', controller.getMessages);

export default router;
