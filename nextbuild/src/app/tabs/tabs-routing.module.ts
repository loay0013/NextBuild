import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminPageModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('../admin-model/edit/edit.module').then(m => m.EditPageModule)
      },
      {
        path: 'save',
        loadChildren: () => import('../admin-model/save/save.module').then(m => m.SavePageModule)
      },
      {
        path: 'game-choice',
        loadChildren: () => import('../game-choice/game-choice.module').then( m => m.GameChoicePageModule)
      },
      {
        path: 'graphics-card-choice',
        loadChildren: () => import('../graphics-card-choice/graphics-card-choice.module').then( m => m.GraphicsCardChoicePageModule)
      },
      {
        path: 'ssdchoice',
        loadChildren: () => import('../ssdchoice/ssdchoice.module').then( m => m.SSDChoicePageModule)
      },
      {
        path: 'multitask',
        loadChildren: () => import('../multitask/multitask.module').then( m => m.MultitaskPageModule)
      },
      {
        path: 'resultater',
        loadChildren: () => import('../resultater/resultater.module').then( m => m.ResultaterPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
