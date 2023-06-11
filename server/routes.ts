import { router } from "express";
import controller from "./controllers/index";

router.get("/users", controller.getUsers);
router.get("/friends", controller.getFriends);
router.get("/posts", controller.getPosts);
router.get("/votes", controller.getVotes);
router.get("/events", controller.getEvents);
router.get("/chatrooms", controller.getChatrooms);
router.get("/messages", controller.getMessages);

router.post("/accounts", controller.account.login);
router.post("/account", controller.account.post);

export default router;
