import { Component, EventEmitter, Input, Output } from '@angular/core';
import { menuSet } from '../../data/interfaces/menu-set.interface';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() menus: menuSet[] = [];
  @Input() selectedId: number | null = null;
  @Output() menuSelected = new EventEmitter<number>();

  selectMenu(id: number) {
    this.menuSelected.emit(id);
  }
}
