// FINISH VERB1 - ROUTER
import { Router } from "express";
import * as wineController from "../controllers/wine.controller.js"
router.post("/wines", wineController.createWine);

const router = Router();

router.get("/", (req, res) => {
    res.render("default", {
        title: "MVC Starter App",
        subtitle: "Express + EJS + Static Assets"
    });
});

// GET /wines (Get all)
router.get("/wines", wineController.getAllWines);

// GET /wines/:id (Get one by ID)
router.get("/wines/:id", wineController.getWineById);


export default router;