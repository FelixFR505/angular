import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Hulk', 'Spider Man', 'Iron Man', 'Cpt. America', 'Thor'];
  public deletedHero?: string;

  deleteHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
