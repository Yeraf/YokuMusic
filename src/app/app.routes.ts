//Importar las rutas
import { RouterModule, Routes } from "@angular/router";
import { BusquedaComponent } from "./busqueda/busqueda.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

//App_Routes, se crean las rutas de los componentes
const APP_ROUTES:Routes = [
    {path:'home',component:HomeComponent},
    {path:'busqueda',component:BusquedaComponent},
    {path:'navbar',component:NavbarComponent},
    {path: 'footer',component:FooterComponent},
    {path:'**',pathMatch: 'full', redirectTo:'home'}, //Re direccionar por seguridad en el ruteo
    {path:'***',pathMatch: 'full', redirectTo:'home'} //Re direccionar por seguridad en el ruteo
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
