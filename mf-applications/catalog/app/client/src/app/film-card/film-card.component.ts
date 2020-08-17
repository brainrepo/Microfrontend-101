import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {


  @Input() title: string;
  @Input() poster: string;
  @Input() rating: string;
  @Input() genre: string;

  constructor() { }

  ngOnInit(): void {
  }

}
