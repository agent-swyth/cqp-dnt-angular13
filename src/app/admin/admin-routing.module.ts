import { ContentChild, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from '../public/cocktail/cocktail.component';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserModule } from './user/user.module';


const routes: Routes = [
    {
        path: '', component: AlayoutComponent, children: [
            // Route par défaut
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            // Simple route
            { path: 'dashboard', component: DashboardComponent },
            // Lazy load
            {
                path: 'user', loadChildren: () => import('./user/user.module')
                    .then(m => m.UserModule)
            },
            {
                path: 'cocktail', loadChildren: () => import('./cocktail/cocktail.module')
                    .then(m => m.CocktailModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
