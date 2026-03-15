import { Component, computed, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { menuItem } from '../../data/interfaces/menu-item.interface';
import { MENU_SETS } from '../../data/menu-sets-data'
import { Sidebar } from '../../common-components/sidebar/sidebar';

@Component({
  selector: 'app-menu-page',
  imports: [Sidebar, DecimalPipe],
  templateUrl: './menu-page.html',
  styleUrl: './menu-page.scss',
})

export class MenuPage {

  menuSets = signal(MENU_SETS)

  selectedMenuId = signal<number>(1);

  currentMenu = computed(() => 
    this.menuSets().find(m => m.id === this.selectedMenuId())
  );

  currentItems = computed(() => this.currentMenu()?.items ?? []);

  currentName = computed(() => this.currentMenu()?.name ?? '');

  selectedCount = computed(() => this.currentItems().filter(item => item.isChecked).length)

  totalValue = computed(() => this.currentItems().filter(item => item.isChecked).reduce((val, item) => val + item.value, 0))

  onCheckboxChange(item: menuItem, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.menuSets.update(menus =>
      menus.map(menu => {
        if (menu.id !== this.selectedMenuId()) return menu;
        return {...menu, items: menu.items.map(i => 
                  i.id === item.id ? { ...i, isChecked: checked } : i
        )};
      })
    );
  }
}
