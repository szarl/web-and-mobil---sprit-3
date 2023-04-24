import { Routes } from "@angular/router";
import { Apartment } from "../pages/apartment/Apartment";
import { Apartments } from "../pages/apartments/Apartments";

export const routes: Routes = [
    { path: 'appartament', component: Apartment },
    { path: 'appartaments', component: Apartments },
];