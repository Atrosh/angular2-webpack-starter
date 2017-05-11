import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { WeekComponent } from './week.component/week.component';
import { AdminComponent } from './admin.component/admin.component';
import { CourseComponent } from './course.component/course.component';
import { TodayComponent } from './today.component/today.component';
import { AdminGuard } from './admin-guard.service';

export const ROUTES: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detail', loadChildren: './+detail#DetailModule'},
  {path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoContentComponent}
];
