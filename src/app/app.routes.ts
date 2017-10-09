import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { Page1Component } from './pages/page1/page1.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'page1', component: Page1Component},
    {path: '**', component: HomePageComponent}
];

export const Routing = RouterModule.forRoot(routes, {useHash: true});
