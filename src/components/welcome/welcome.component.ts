
import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  proseSizeClass = input<string>('prose-lg');
  fontColor = input<string>('rgb(30 41 59)');
}