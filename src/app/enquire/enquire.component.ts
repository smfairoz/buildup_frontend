import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-enquire',
  templateUrl: './enquire.component.html',
  styleUrls: ['./enquire.component.css']
})
export class EnquireComponent {
constructor(private r:Router){}
}
