import { RouterModule, Routes  } from '@angular/router';

import { LoginComponent } from './module/login/component/login';
import { WorkComponent } from './module/work/component/work';

const appRoutes: Routes = [
	{ path: '', component: WorkComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'workspace', component: WorkComponent }
];

export const mainRouting = RouterModule.forRoot(appRoutes);