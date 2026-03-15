import { menuItem } from "./menu-item.interface";

export interface menuSet {
    id: number;
    name: string;
    unit: string;
    items: menuItem[];
}