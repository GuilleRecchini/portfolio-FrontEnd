import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { ProyectItemComponent } from './components/proyect-item/proyect-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    ExperienceItemComponent,
    ExperienceComponent,
    EducationItemComponent,
    EducationComponent,
    SkillComponent,
    SkillItemComponent,
    ProyectComponent,
    ProyectItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
