import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BioComponent } from './components/bio/bio.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AwardComponent } from './components/award/award.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    NavigationComponent,
    ExperienceComponent,
    AwardComponent,
    ResumeComponent,
    ContactComponent,
    CertificationComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'bio', component: BioComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'award', component: AwardComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'certification', component: CertificationComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'resume', component: ResumeComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
