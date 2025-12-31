import { Component, signal } from '@angular/core';
import {EnteteComponent} from './entete/entete';
import {ExperiencesComponent} from './experiences/experiences';
import {FormationsComponent} from './formations/formations';
import { ContactComponent } from './contact/contact';
import { CompetencesComponent } from './competences/competences';
import { LanguesComponent } from './langues/langues';


@Component({
  selector: 'app-root',
  imports: [
            EnteteComponent,
            ExperiencesComponent,
            FormationsComponent,
            ContactComponent, 
            CompetencesComponent,
            LanguesComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
