import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { AboutComponent } from './principal/about/about.component';
import { ConceptComponent } from './principal/concept/concept.component';
import { TattooComponent } from './principal/tattoo/tattoo.component';
import { IlustrationComponent } from './principal/ilustration/ilustration.component';
import { WorkComponent } from './principal/work/work.component';
import { ShopComponent } from './principal/shop/shop.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'account', loadChildren: accountModule },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },

    { path: 'about', component: AboutComponent },
    { path: 'concept', component: ConceptComponent },
    { path: 'tattoo', component: TattooComponent },
    { path: 'ilustration', component: IlustrationComponent },
    { path: 'work', component: WorkComponent },
    { path: 'shop', component: ShopComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
