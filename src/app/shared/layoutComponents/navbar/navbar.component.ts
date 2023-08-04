import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public selectorTheme = document.getElementById('themeBeBolder');

  constructor() { }

  ngOnInit(): void {
    this.validateTheme();
  }

  public validateTheme():void{
    const firstTheme = './assets/css/colors/bebolder.css';
    this.selectorTheme?.setAttribute('href', firstTheme);
  }

}
