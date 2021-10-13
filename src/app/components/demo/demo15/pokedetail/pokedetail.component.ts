import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.scss'],
})
export class PokedetailComponent implements OnInit {
  @Input() set url(u: string) {
    this._pokeService.getOne(u).subscribe((data: Pokemon) => {
      this.pokemon = data;
    });
  }

  pokemon!: Pokemon;

  constructor(private _pokeService: PokeService) {}

  ngOnInit(): void {}
}
