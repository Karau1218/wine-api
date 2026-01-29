// FINISH VERB1 - ROUTER
import { Router } from "express";
import * as wineController from "../controllers/wine.controller.js"

const router = Router();
// Get all wines
export const getAllWines = (req, res) => {
    let result = tickets;

}
// router.get("/wines", wineController.getAllWines);

// Get wines by id
router.get("/wines/:id", wineController.getWinebyId);

export const wineById = (req, res) => {
    const { id }
}


router.get("/", (req, res) => {
    res.render("default", {
        title: "MVC Starter App",
        subtitle: "Express + EJS + Static Assets"
    });
});


export default router;