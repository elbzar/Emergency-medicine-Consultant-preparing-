
import { Component, ChangeDetectionStrategy, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topic } from '../../models/data.model';

interface Panel {
  key: keyof Topic;
  title: string;
}

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  imports: [CommonModule],
})
export class TopicDetailComponent {
  topic = input.required<Topic>();
  isMastered = input.required<boolean>();
  masteryToggled = output<void>();
  proseSizeClass = input<string>('prose-lg');
  fontColor = input<string>('rgb(30 41 59)');

  openPanelKey = signal<string | null>(null);

  panels: Panel[] = [
    { key: 'pathophysiology', title: 'Pathophysiology' },
    { key: 'drugsAndEvidence', title: 'Drugs & Evidence' },
    { key: 'consultantManagement', title: 'Consultant Management Approach' },
    { key: 'verbalBoardScript', title: 'Verbal Board Script' },
    { key: 'logisticsAndPitfalls', title: 'Logistics & Pitfalls' },
    { key: 'atypicalPresentations', title: 'How to Catch Vague / Atypical Presentations' }
  ];

  togglePanel(key: string): void {
    this.openPanelKey.set(this.openPanelKey() === key ? null : key);
  }

  onMasteryChange(): void {
    this.masteryToggled.emit();
  }
}