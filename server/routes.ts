import { router } from "express";
import controller from "./controllers/index";

router.get("/accounts", controller.getAccounts);
router.get("/users", controller.getUsers);
router.get("/friends", controller.getFriends);
router.get("/posts", controller.getPosts);
router.get("/votes", controller.getVotes);
router.get("/events", controller.getEvents);
router.get("/chatrooms", controller.getChatrooms);
router.get("/messages", controller.getMessages);

export default router;
