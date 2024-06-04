import { Component } from '@angular/core';
import { NavbarComponent } from '../HomeComponents/navbar/navbar.component';
import { HerosectionComponent } from '../HomeComponents/herosection/herosection.component';
import { AboutsectionComponent } from '../HomeComponents/aboutsection/aboutsection.component';
import { VillfeatureComponent } from '../HomeComponents/villfeature/villfeature.component';
import { FeaturesComponent } from '../HomeComponents/features/features.component';
import { KeyFeaturesComponent } from '../HomeComponents/key-features/key-features.component';
import { GalleryComponent } from '../HomeComponents/gallery/gallery.component';
import { WhochooseComponent } from '../HomeComponents/whochoose/whochoose.component';
import { FooterComponent } from '../HomeComponents/footer/footer.component';

@Component({
  selector: 'app-homescreen',
  standalone: true,
  imports: [NavbarComponent , HerosectionComponent , AboutsectionComponent , VillfeatureComponent , FeaturesComponent , KeyFeaturesComponent , GalleryComponent,WhochooseComponent,FooterComponent],
  templateUrl: './homescreen.component.html',
  styleUrl: './homescreen.component.css'
})
export class HomescreenComponent {

}
