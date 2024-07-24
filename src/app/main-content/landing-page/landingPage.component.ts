import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component'

//was mit @anfängt in diesem Kontext ist ein sog. decorator
//ist eine FUnktion , die um die Klasse herum ausgeführt wird 
@Component({
    //selector wird benutzt, um in anderen html seiten aufzurufen
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: /*html*/`
    <section>
        <div class="navBarDivClass"><app-navbar></app-navbar></div>
        
        <h1>SAKURA RAMEN</h1>
        <h6>BEST RAMEN IN TOWN</h6>
    </section>`,
    styleUrls: ['./landingPage.component.scss']

})

//export damit Zugriff überall im Projektordner möglich ist
export class LandingPageComponent {}