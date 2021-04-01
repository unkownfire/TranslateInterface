import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';
import { Observable } from 'rxjs';
import { Translation } from '../translation'
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {
  messages: Array<{text:string, vote: number, translation: string}> = [];
  message: string = "";
  translation: string = "";
  esTen: boolean = false;
  thumbUp: boolean = false;
  thumbDown: boolean = true;
  send(): void {
    this.translateService.translateText(this.message, this.esTen? 'en' : 'es', this.esTen? 'es' : 'en')
      .subscribe( res =>
        {

          this.translation = "";
          console.log(res);
          this.translation = res.data.translations[0].translatedText;
          //console.log(data);
          this.messages.push({text: this.message, vote: 0, translation: this.translation});
          this.message = "";

        });



    console.log(this.messages);
  }
  switch(): void {
    this.esTen = !this.esTen;
  }
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

}
