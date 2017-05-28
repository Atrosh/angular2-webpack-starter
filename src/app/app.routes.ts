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
import { EditCourseComponent } from './edit-course.component/edit-course.component';
import { EditUnitComponent } from './edit-unit.component/edit-unit.component';
import { EditParagraphComponent } from './edit-paragraph.component/edit-paragraph.component';
import { NewCourseComponent } from './new-course.component/new-course.component';
import { CourseInfoComponent } from './course-info.component/course-info.component';
import { CoursesComponent } from './courses.component/courses.component';

export const ROUTES: Routes = [
  {path: '', component: TodayComponent, canActivate: [AuthGuard]},
  {path: 'home', component: TodayComponent, canActivate: [AuthGuard]},
  {path: 'week', component: WeekComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  {path: 'course/:id', component: CourseComponent, canActivate: [AuthGuard]},
  {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
  {path: 'course-info/:id', component: CourseInfoComponent, canActivate: [AuthGuard]},
  {path: 'new-course', component: NewCourseComponent, canActivate: [AdminGuard]},
  {path: 'edit-course/:id', component: EditCourseComponent, canActivate: [AdminGuard]},
  {path: 'edit-unit/:id', component: EditUnitComponent, canActivate: [AdminGuard]},
  {path: 'edit-paragraph/:id', component: EditParagraphComponent, canActivate: [AdminGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detail', loadChildren: './+detail#DetailModule'},
  {path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  {path: 'home2', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoContentComponent}
];
