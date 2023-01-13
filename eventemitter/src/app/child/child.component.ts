import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
outputMessage: string = "child-to-parent";
@Output() messageEvent= new EventEmitter<string>();
@Input() childInput:string = "";
constructor(){

}
ngOninit()
{

}
sendMessage(outputMessage:string){
  if (outputMessage =="")
  {
    outputMessage = "child-to-parent";
  }
  this.messageEvent.emit(outputMessage)
}
}
