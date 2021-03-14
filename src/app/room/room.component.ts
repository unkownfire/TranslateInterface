import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {
  messages: Array<{text:string, vote: number, translation: string}> = [];
  message: string = "";
  esTen: boolean = false;

  send(): void {

    this.messages.push({text: this.message, vote: 0, translation: !this.esTen ? 'English sample text' : 'Texto de ejemplo Español'});
    this.message = "";
    console.log(this.messages);
  }
  switch(): void {
    this.esTen = !this.esTen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
