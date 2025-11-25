
import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/data.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [CommonModule],
})
export class SidebarComponent {
  categories = input.required<Category[]>();
  progress = input.required<number>();

  searchChanged = output<string>();
  topicSelected = output<number>();
  sidebarCloseRequested = output<void>();
  fontSizeChanged = output<number>();
  fontSizeReset = output<void>();
  fontColorChanged = output<string>();

  colors = [
    { name: 'Slate', value: 'rgb(30 41 59)', class: 'bg-slate-900' },
    { name: 'Blue', value: 'rgb(30 58 138)', class: 'bg-blue-900' },
    { name: 'Black', value: 'rgb(0 0 0)', class: 'bg-black' },
    { name: 'Gray', value: 'rgb(75 85 99)', class: 'bg-gray-600' },
  ];

  onSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchChanged.emit(inputElement.value);
  }

  selectTopic(topicId: number): void {
    this.topicSelected.emit(topicId);
  }

  requestClose(): void {
    this.sidebarCloseRequested.emit();
  }

  changeFontSize(delta: number): void {
    this.fontSizeChanged.emit(delta);
  }

  resetFontSize(): void {
    this.fontSizeReset.emit();
  }

  changeFontColor(colorValue: string): void {
    this.fontColorChanged.emit(colorValue);
  }
}