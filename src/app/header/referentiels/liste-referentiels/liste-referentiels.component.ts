import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-referentiels',
  templateUrl: './liste-referentiels.component.html',
  styleUrls: ['./liste-referentiels.component.css']
})
export class ListeReferentielsComponent implements OnInit {

  constructor() { }
tab = [1, 2, 3];
  ngOnInit(): void {
  }

}
