import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../reusable/header/header.component";
import { FooterComponent } from '../reusable/footer/footer.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.less'],
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class LayoutComponent {

}
