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
  {path: '', component: TodayComponent, canActivate: [AuthGuard]},
  {path: 'home', component: TodayComponent, canActivate: [AuthGuard]},
  {path: 'week', component: WeekComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  {path: 'course', component: CourseComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detail', loadChildren: './+detail#DetailModule'},
  {path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  {path: 'home2', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoContentComponent}
];
