import { menuSet } from "./interfaces/menu-set.interface";

export const MENU_SETS: menuSet[] = [
    {
        "id": 1, 
        "name": "Прочитанные книги", 
        "unit": "стр",
        "items":
                [
                    { "id": 1, "name": "Война и мир", "value": 1300 , "isChecked": false},
                    { "id": 2, "name": "Преступление и наказание", "value": 672, "isChecked": false },
                    { "id": 3, "name": "Мастер и Маргарита", "value": 480, "isChecked": false },
                    { "id": 4, "name": "Дюна", "value": 896 , "isChecked": false},
                    { "id": 5, "name": "Нейромант", "value": 384, "isChecked": false },
                    { "id": 6, "name": "Автостопом по галактике", "value": 250, "isChecked": false },
                ]
    },

    {
        "id": 2, 
        "name": "Список дел", 
        "unit": "ч",
        "items":
                [
                    { "id": 1, "name": "Написать отчёт", "value": 2.5 , "isChecked": false},
                    { "id": 2, "name": "Созвониться с заказчиком", "value": 1, "isChecked": false },
                    { "id": 3, "name": "Подготовить презентацию", "value": 3, "isChecked": false },
                    { "id": 4, "name": "Заказать продукты", "value": 0.5, "isChecked": false },
                    { "id": 5, "name": "Прочитать книгу", "value": 4, "isChecked": false }
                    
                ]
    },

    {
        "id": 3,
        "name": 'Туристическое снаряжение',
        "unit":"кг", 
        "items": [
                    { "id": 1, "name": 'Палатка двухместная', "value": 2.5, "isChecked": false },
                    { "id": 2, "name": 'Спальник', "value": 1.2, "isChecked": false },
                    { "id": 3, "name": 'Коврик туристический', "value": 0.4, "isChecked": false },
                    { "id": 4, "name": 'Горелка', "value": 0.3, "isChecked": false },
                    { "id": 5, "name": 'Котёл', "value": 0.5, "isChecked": false },
                    { "id": 7, "name": 'Термос', "value": 0.8, "isChecked": false },
                    { "id": 8, "name": 'Термобельё', "value": 0.3, "isChecked": false },
                    { "id": 9, "name": 'Флиска', "value": 0.4, "isChecked": false },
                    { "id": 10, "name": 'Непромокаемая куртка', "value": 0.6, "isChecked": false },
                    { "id": 11, "name": 'Треккинговые ботинки', "value": 1.5, "isChecked": false }
                ]
    }
]