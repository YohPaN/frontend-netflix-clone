import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navigation: HTMLElement | null = null;
  avatarMenu: HTMLElement | null = null;
  menuButton: HTMLElement | null = null;
  navbar: HTMLElement | null = null;
  backgroundNavbar: string[] = [
    "rgb(20, 20, 20, 1)",
    "linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 27%)"
  ]
  yourName = "Yohan"
  menuDisplay: boolean = false;

  constructor() {
    this.navigation = document.getElementById('navigation');
    this.avatarMenu = document.getElementById('avatar-menu');
    this.menuButton = document.getElementById('menu-btn');
    this.navbar = document.getElementsByTagName('nav')[0];
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;

      if(scrollPosition == 0 && this.navbar) {
        this.navbar.style.background = this.backgroundNavbar[1];
      } else if(this.navbar) {
        this.navbar.style.background = this.backgroundNavbar[0];
      }
    })

    this.menuButton?.addEventListener('click', () => {
      if(this.navigation !== null && this.avatarMenu !== null && this.navbar !== null) {
        if(this.menuDisplay) {
          this.navigation.style.transform = 'translate(-100%)';
          this.avatarMenu.style.transform = 'translate(-100%)';
          this.navbar.style.background = this.backgroundNavbar[1];
        } else {
          this.navigation.style.transform = 'translate(0)';
          this.avatarMenu.style.transform = 'translate(0)';
          this.navbar.style.background = this.backgroundNavbar[0];
        }
        this.menuDisplay = !this.menuDisplay
      }
    })
  }
}
