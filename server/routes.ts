import { Router } from 'express';
import events from './controllers/events';
import friends from './controllers/friends';
import controller from './controllers/index';
import posts from './controllers/post';
import profile from './controllers/profile';

const router = Router();

//** Profile **//
router.get("/users/:id", profile.getUserById); // called in... screens/ProfileScreen.tsx <-- CONFIRM WORKS
router.put("/posts/:id", profile.updateIsDeletedByPostId) // called in... screens/screen-components/profile-screens/UsersPosts.tsx
router.put("/userPosts/:id", profile.updateUserPostById) // called in... screens/screen-components/profile-screens/UsersPosts.tsx
router.put("/userProfile/:id", profile.updateUserProfileById) // called in... screens/screen-components/profile-screens/UpdateProfileScreen.tsx <-- CONFIRM WORKS

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

router.get('/anime', controller.anime.all)
router.get('/anime/titles', controller.anime.titles)

//** Posts **//
router.get('/posts', controller.post.getPosts);
router.delete('/posts', controller.post.delete)

//** Auth **//
router.post('/login', controller.account.login);
router.post('/signup', controller.account.post);

export default router