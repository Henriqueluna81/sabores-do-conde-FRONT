import { Component } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  styles: [`
    .feedback-container {
      width: 1000px;
      height: 200px;
      display: flex;
      align-items: center;
      gap:10px;
      overflow-y: hidden;
      overflow-x: auto;
      // white-space: nowrap;
    }
    .feedback-message {
      background: blue;
      width: 300px;
      height: 100px;
      padding: 2px;
      border-radius: 10px;
      border: 1px;
      word-wrap: break-word;
    }
  `]
})

export class InicioComponent {
 
  feedbackText: string = '';
  feedbackMessages: string[] = [];
  backgroundColor: string = '#4A4848'; // Cor padrão

  sendFeedback() {
    this.feedbackMessages.push(this.feedbackText);
    this.feedbackText = '';
    
  }



}
