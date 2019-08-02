import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public toggleMenu() {
    let right = 'right: ';
    if (window.innerWidth <= 768) {
      right = right + '0';
    }
    if (window.innerWidth >= 768) {
      right = right + '0';
    }

    document.getElementById('main__sidebar').setAttribute('style', right);
  }

  constructor() {}

  ngOnInit() {}

}
