import { Router } from "express";

import {
    createCategoryController,
    categoriesRepository,
} from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    const categories = categoriesRepository.list();

    return res.status(200).json(categories);
});

export { categoriesRoutes };
