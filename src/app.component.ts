import { Component, ChangeDetectionStrategy, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './services/data.service';
import { Category, Topic } from './models/data.model';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SidebarComponent, TopicDetailComponent, WelcomeComponent],
})
export class AppComponent {
  private dataService = new DataService();

  // Signals for state management
  searchTerm = signal<string>('');
  selectedTopicId = signal<number | null>(null);
  masteryState = signal<{ [key: number]: boolean }>({});
  isSidebarVisible = signal(true);
  fontSize = signal<number>(0); // -2 to 2 scale
  fontColor = signal<string>('rgb(30 41 59)'); // Default: slate-900
  displayMode = signal<'accordion' | 'book'>('accordion');

  // Computed signals for derived state
  allTopics = computed(() => this.dataService.getCategories().flatMap(c => c.topics));
  categories = computed(() => this.dataService.getCategories());

  filteredCategories = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) {
      return this.categories();
    }
    const filtered: Category[] = [];
    this.categories().forEach(category => {
      const matchingTopics = category.topics.filter(topic =>
        topic.title.toLowerCase().includes(term)
      );
      if (matchingTopics.length > 0) {
        filtered.push({ ...category, topics: matchingTopics });
      }
    });
    return filtered;
  });

  selectedTopic = computed(() => {
    const id = this.selectedTopicId();
    if (id === null) return null;
    return this.allTopics().find(t => t.id === id) || null;
  });

  masteryProgress = computed(() => {
    const total = this.allTopics().length;
    if (total === 0) return 0;
    const masteredCount = Object.values(this.masteryState()).filter(Boolean).length;
    return (masteredCount / total) * 100;
  });

  proseSizeClass = computed(() => {
    const base = 'prose';
    switch (this.fontSize()) {
      case -2: return `${base} prose-sm`;
      case -1: return base;
      case 0:  return `${base} prose-lg`;
      case 1:  return `${base} prose-xl`;
      case 2:  return `${base} prose-2xl`;
      default: return `${base} prose-lg`;
    }
  });

  constructor() {
    // Load state from localStorage
    if (typeof localStorage !== 'undefined') {
        const savedMastery = localStorage.getItem('emConsultantMastery');
        if (savedMastery) {
            this.masteryState.set(JSON.parse(savedMastery));
        }
        const savedFontSize = localStorage.getItem('emConsultantFontSize');
        if (savedFontSize) {
            this.fontSize.set(JSON.parse(savedFontSize));
        }
        const savedFontColor = localStorage.getItem('emConsultantFontColor');
        if (savedFontColor) {
            this.fontColor.set(JSON.parse(savedFontColor));
        }
        const savedDisplayMode = localStorage.getItem('emConsultantDisplayMode');
        if (savedDisplayMode) {
            this.displayMode.set(savedDisplayMode as 'accordion' | 'book');
        }
    }

    // Effect to save states to localStorage
    effect(() => {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('emConsultantMastery', JSON.stringify(this.masteryState()));
            localStorage.setItem('emConsultantFontSize', JSON.stringify(this.fontSize()));
            localStorage.setItem('emConsultantFontColor', JSON.stringify(this.fontColor()));
            localStorage.setItem('emConsultantDisplayMode', this.displayMode());
        }
    });
  }

  // Event handlers
  onSearch(term: string): void {
    this.searchTerm.set(term);
  }

  onSelectTopic(topicId: number): void {
    this.selectedTopicId.set(topicId);
    this.isSidebarVisible.set(false); // Auto-hide sidebar on topic selection
  }

  onToggleMastery(topicId: number): void {
    this.masteryState.update(current => {
      const newState = { ...current };
      newState[topicId] = !newState[topicId];
      return newState;
    });
  }

  toggleSidebar(): void {
    this.isSidebarVisible.update(v => !v);
  }

  onFontSizeChange(delta: number): void {
    this.fontSize.update(current => Math.max(-2, Math.min(2, current + delta)));
  }

  onFontSizeReset(): void {
    this.fontSize.set(0);
  }

  onFontColorChange(color: string): void {
    this.fontColor.set(color);
  }

  toggleDisplayMode(): void {
    this.displayMode.update(current => current === 'accordion' ? 'book' : 'accordion');
  }
}