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
    path: 'gameselect',
    loadChildren: () => import('./sigurdWorkspace/gameselect/gameselect.module').then( m => m.GameselectPageModule)
  },
  {
    path: 'graphics',
    loadChildren: () => import('./sigurdWorkspace/graphics/graphics.module').then(m => m.GraphicsPageModule)
  },
  {
    path: 'graphics',
    loadChildren: () => import('./sigurdWorkspace/graphics/graphics.module').then( m => m.GraphicsPageModule)
  },  {
    path: 'storage',
    loadChildren: () => import('./sigurdWorkspace/storage/storage.module').then( m => m.StoragePageModule)
  },
  {
    path: 'multitasking',
    loadChildren: () => import('./sigurdWorkspace/multitasking/multitasking.module').then( m => m.MultitaskingPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
