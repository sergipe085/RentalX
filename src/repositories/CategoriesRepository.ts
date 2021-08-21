import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category(name, description, new Date());

        this.categories.push(category);
    }
}

export { CategoriesRepository };
