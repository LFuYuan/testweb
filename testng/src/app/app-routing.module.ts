import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { SettingComponent } from './components/setting/setting.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'setting',
        component: SettingComponent
      },
      {   /*匹配不到路由的时候加载的组件*/
        path: '**',  /*任意的路由*/
        // component:HomeComponent
        redirectTo: 'setting'
      }
    ]
  },
  {
    path: 'new',
    component: NewsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
