import { Component } from '@angular/core';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
icon=faAngleDown;
plane=faPaperPlane;

}
