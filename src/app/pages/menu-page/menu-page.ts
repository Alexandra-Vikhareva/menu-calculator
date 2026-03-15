import { Component, computed, signal } from '@angular/core';
import { menuItem } from '../../data/interfaces/menu-item.interface';

@Component({
  selector: 'app-menu-page',
  imports: [],
  templateUrl: './menu-page.html',
  styleUrl: './menu-page.scss',
})

export class MenuPage {

  menuItems = signal<menuItem[]>(
  [{ "id": 1, "name": "Пицца Маргарита", "value": 450 , isChecked: false},
  { "id": 2, "name": "Паста Карбонара", "value": 380, isChecked: false },
  { "id": 3, "name": "Цезарь с курицей", "value": 320, isChecked: false }]);

  selectedCount = computed(() => this.menuItems().filter(item => item.isChecked).length)

  totalValue = computed(() => this.menuItems().filter(item => item.isChecked).reduce((val, item) => val + item.value, 0))

  onCheckboxChange(item: menuItem, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.menuItems.update(items =>
      items.map(i => i.id === item.id ? { ...i, isChecked: checked } : i)
    );
  }
}
