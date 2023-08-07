import { Component, OnInit } from '@angular/core';
import { Playerias } from '../playerias';
import { PlayeriasService } from '../playerias.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{
  player: Playerias[];

  constructor(private playeriasService : PlayeriasService) { }
  ngOnInit(): void {
  this.getPlayers();
  }

  private getPlayers(){
    this.playeriasService.getListPlayers().subscribe(dato => {
      this.player = dato;      
});
  }
}
