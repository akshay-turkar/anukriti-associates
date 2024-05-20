import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LayoutComponent } from '../../layout.component';
import { HomeComponent } from '../../../features/home/home.component';
import { AboutUsComponent } from '../../../features/about-us/about-us.component';
import { ServicesComponent } from '../../../features/services/services.component';
import { PortfolioComponent } from '../../../features/portfolio/portfolio.component';
import { HowItWorksComponent } from '../../../features/how-it-works/how-it-works.component';
import { ContactUsComponent } from '../../../features/contact-us/contact-us.component';
import { ProjectsComponent } from '../../../features/projects/projects.component';
import { ErrorComponent } from '../../../reusable/error/error.component';


const routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      { path: '', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'best-services', component: ServicesComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'our-process', component: HowItWorksComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'our-projects', component: ProjectsComponent },
      { path: '**', component: ErrorComponent },  // Wildcard route for a 404 pagecd
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class LayoutRouterModule { }
