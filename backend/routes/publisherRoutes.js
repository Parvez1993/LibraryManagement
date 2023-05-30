import express from "express";
import { createPublisher, deletePublisherById, editPublisher, getPublishers } from "../controller/publisher.js";
import auth from "../middleware/auth.js"

const publisherRoutes = express.Router();
publisherRoutes.route("/").get(auth,getPublishers);
publisherRoutes.route("/").post(auth,createPublisher);
publisherRoutes.route("/:id").put(auth,editPublisher);
publisherRoutes.route("/:id").delete(auth,deletePublisherById);

export default publisherRoutes;