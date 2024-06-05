import { Component } from '@angular/core';
import { NavbarComponent } from '../HomeComponents/navbar/navbar.component';
import { FooterComponent } from '../HomeComponents/footer/footer.component';

@Component({
  selector: 'app-villa-details',
  standalone: true,
  imports: [NavbarComponent , FooterComponent],
  templateUrl: './villa-details.component.html',
  styleUrl: './villa-details.component.css'
})
export class VillaDetailsComponent {

}
