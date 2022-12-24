import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './indexx/navbar/navbar.component';
import { BannercarouselComponent } from './indexx/bannercarousel/bannercarousel.component';
import { ModalLoginComponent } from './indexx/modal-login/modal-login.component';
import { AcercademiComponent } from './indexx/acercademi/acercademi.component';
import { ExperienciaComponent } from './indexx/experiencia/experiencia.component';
import { EducacionComponent } from './indexx/educacion/educacion.component';
import { HabilidadesComponent } from './indexx/habilidades/habilidades.component';
import { ProyectosComponent } from './indexx/proyectos/proyectos.component';
import { NavbarrrComponent } from './dashboardd/navbarrr/navbarrr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerrrComponent } from './dashboardd/bannerrr/bannerrr.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './indexx/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalPersonaComponent } from './modales/modal-persona/modal-persona.component';
import { ModalHabilidadComponent } from './modales/modal-habilidad/modal-habilidad.component';
import { ModalProyectoComponent } from './modales/modal-proyecto/modal-proyecto.component';








@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    BannercarouselComponent,
    ModalLoginComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    NavbarrrComponent,
    DashboardComponent,
    BannerrrComponent,
    ErrorComponent,
    FooterComponent,
    ModalEducacionComponent,
    ModalExperienciaComponent,
    ModalPersonaComponent,
    ModalHabilidadComponent,
    ModalProyectoComponent,

 
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
