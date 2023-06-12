import { Router } from "express";
import controller from "./controllers/index";

const router = Router();

router.get("/users", controller.getUsers);
router.get("/friends", controller.getFriends);
router.get("/posts", controller.getPosts);
router.get("/votes", controller.getVotes);
router.get("/events", controller.getEvents);
router.get("/chatrooms", controller.getChatrooms);
router.get("/messages", controller.getMessages);

router.post("/login", controller.account.login);
router.post("/signup", controller.account.post);

router.get("/users/:id", controller.getUserById);
router.put("/users/:id", controller.updateUserById);
//router.put for "deleting" a post, basically updating that property

export default router;
