import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() parentMessage="";
  constructor(){

  }
  ngOnInit(){

  }
 message=""
 recieveMessage($event:any){
  this.message = $event
  console.log(this.message, $event)
 }
}
