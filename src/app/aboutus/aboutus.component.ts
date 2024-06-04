import { Component } from '@angular/core';
import { NavbarComponent } from '../HomeComponents/navbar/navbar.component';
import { FooterComponent } from '../HomeComponents/footer/footer.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [NavbarComponent , FooterComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
