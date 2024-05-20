import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule, NzDrawerModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  isResponsive: boolean = false;
  isExpanded = false
  activeTab="home";

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    const navbar = document.querySelector('.navigation-container');
    if (navbar!= null && window.scrollY > 130) {
      navbar.classList.add('scrolled');
    } else if (navbar!= null) {
      navbar.classList.remove('scrolled');
    }
  }

  tabChange(tab: string){
    this.activeTab = tab
    this.isExpanded = false
  }

}
