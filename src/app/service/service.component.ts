import { Component } from '@angular/core';
import { NavbarComponent } from '../HomeComponents/navbar/navbar.component';
import { FooterComponent } from '../HomeComponents/footer/footer.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NavbarComponent , FooterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
