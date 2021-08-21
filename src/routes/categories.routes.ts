import { Router } from "express";

import { Category } from "../models/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const category = new Category(name, description, new Date());

    categories.push(category);

    return res.status(201).json(category);
});

export { categoriesRoutes };
