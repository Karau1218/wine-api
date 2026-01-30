// FINISH VERB1 - ROUTER
import { Router } from "express";
import * as wineController from "../controllers/wine.controller.js"

const router = Router();

router.post("/wines", wineController.createWine);
router.put("/wines/:id", wineController.updateWine);
router.delete("/wines/:id", wineController.deleteWine);



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