import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";



const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.createSetting);
routes.get("/settings", settingsController.showSetting);

routes.post('/users', usersController.createUsers);
routes.get('/users', usersController.showUsers);

routes.post('/messages', messagesController.createMessages);
routes.get('/messages/', messagesController.showMessages);
routes.get('/messages/:id', messagesController.showByUsers)

export { routes };