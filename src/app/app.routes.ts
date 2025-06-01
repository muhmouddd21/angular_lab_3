
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authguardGuard } from './guards/authguard.guard';
import { preventLoginGuard } from './guards/prevent-login.guard';

export const routes: Routes = [
  {path:'',component:MainLayoutComponent,children :[
    {path:'home',loadComponent :()=>import("./pages/home/home.component").then((c)=>{return c.HomeComponent}),canActivate:[authguardGuard]},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'about',loadComponent:()=> import("./pages/about/about.component").then((c)=>c.AboutComponent ),canActivate:[authguardGuard]},
    {path:'contact',loadComponent:()=>import("./pages/contact/contact.component").then((c)=>c.ContactComponent),canActivate:[authguardGuard]},
    {path:'login',loadComponent:()=>import("./pages/login/login.component").then((c)=>c.LoginComponent),canActivate:[preventLoginGuard]},
    {path:'product/:id',loadComponent: ()=> import("./pages/view-product/view-product.component").then((c)=>c.ViewProductComponent),canActivate:[authguardGuard]}
  ]},
  {path:"**",component:NotFoundComponent}
];
