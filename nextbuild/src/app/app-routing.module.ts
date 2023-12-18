import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'save',
    loadChildren: () => import('./admin-model/save/save.module').then( m => m.SavePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./admin-model/edit/edit.module').then( m => m.EditPageModule)
  },

  {
    path: 'game-choice',
    loadChildren: () => import('./game-choice/game-choice.module').then( m => m.GameChoicePageModule)
  },
  {
    path: 'graphics-card-choice',
    loadChildren: () => import('./graphics-card-choice/graphics-card-choice.module').then( m => m.GraphicsCardChoicePageModule)
  },
  {
    path: 'ssdchoice',
    loadChildren: () => import('./ssdchoice/ssdchoice.module').then( m => m.SSDChoicePageModule)
  },
  {
    path: 'multitask',
    loadChildren: () => import('./multitask/multitask.module').then( m => m.MultitaskPageModule)
  },
  {
    path: 'resultater',
    loadChildren: () => import('./resultater/resultater.module').then( m => m.ResultaterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
