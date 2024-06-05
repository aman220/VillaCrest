import { Component } from '@angular/core';
import { NavbarComponent } from '../HomeComponents/navbar/navbar.component';
import { FooterComponent } from '../HomeComponents/footer/footer.component';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [NavbarComponent , FooterComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

}
