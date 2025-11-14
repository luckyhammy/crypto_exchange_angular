import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acc-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acc_modal.component.html',
  styleUrls: ['./acc_modal.component.css']
})
export class Acc_modal_component {
    activeTab: 'Invaders' | 'affiliate' = 'Invaders';

    switchTab(tab: 'Invaders' | 'affiliate'): void {
      this.activeTab = tab;
    }
}
