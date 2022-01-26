import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
const routes: Routes = [{
        path: '',
        redirectTo: 'product_scanner',
        pathMatch: 'full'
    },
    {
        path: 'home/:id',
        loadChildren: './Home/Home.module#HomePageModule',
    },
    {
        path: 'profile',
        loadChildren: './Profile/Profile.module#ProfilePageModule',
    },
    {
        path: 'login',
        loadChildren: './Login/Login.module#LoginPageModule',
    },
    {
        path: 'product_scanner',
        loadChildren: './Product_Scanner/Product_Scanner.module#Product_ScannerPageModule',
    },
    {
        path: 'inventory',
        loadChildren: './Inventory/Inventory.module#InventoryPageModule',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}