import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NavbarComponent } from './HomeComponents/navbar/navbar.component';
import { HerosectionComponent } from './HomeComponents/herosection/herosection.component';
import { AboutsectionComponent } from './HomeComponents/aboutsection/aboutsection.component';
import { VillfeatureComponent } from './HomeComponents/villfeature/villfeature.component';
import { FeaturesComponent } from './HomeComponents/features/features.component';
import { KeyFeaturesComponent } from './HomeComponents/key-features/key-features.component';
import { GalleryComponent } from './HomeComponents/gallery/gallery.component';
import { WhochooseComponent } from './HomeComponents/whochoose/whochoose.component';
import { FooterComponent } from './HomeComponents/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , TooltipModule , NavbarComponent , HerosectionComponent , AboutsectionComponent , VillfeatureComponent , FeaturesComponent , KeyFeaturesComponent , GalleryComponent,WhochooseComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VillaCrest';
}
