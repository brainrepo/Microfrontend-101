import { Component } from '@angular/core';
import Film from '../model/Film';
import { RemoteService } from './remote.service';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  films:Array<Film> = [];
  searchString: string = "";
  searchTermChanged: Subject<string> = new Subject<string>();


  constructor(private remoteService: RemoteService) {}

  ngOnInit(){
    this.remoteService.getFilms().subscribe(films => this.films = films);
  }

  search(event: string):void{

    if (this.searchTermChanged.observers.length === 0) {
      this.searchTermChanged.pipe(debounceTime(1000), distinctUntilChanged())
          .subscribe(term => {
              this.remoteService.searchFilms(term).subscribe(films => this.films = films);
          });
    }
    this.searchTermChanged.next(event);

  }
}
