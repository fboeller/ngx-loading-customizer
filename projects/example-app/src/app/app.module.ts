import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'examples',
          children: [
            {
              path: 'custom-default-loading',
              loadChildren: () =>
                import(
                  './examples/custom-default-loading-example/custom-default-loading-example.module'
                ).then((m) => m.CustomDefaultLoadingExampleModule),
            },
            {
              path: 'ngrx',
              loadChildren: () =>
                import('./examples/ngrx-example/ngrx-example.module').then(
                  (m) => m.NgrxExampleModule
                ),
            },
            {
              path: 'custom-loading-template',
              loadChildren: () =>
                import(
                  './examples/custom-loading-template-example/custom-loading-template-example.module'
                ).then((m) => m.CustomLoadingTemplateExampleModule),
            },
            {
              path: 'default',
              loadChildren: () =>
                import(
                  './examples/default-example/default-example.module'
                ).then((m) => m.DefaultExampleModule),
            },
            {
              path: 'lightweight',
              loadChildren: () =>
                import(
                  './examples/lightweight-example/lightweight-example.module'
                ).then((m) => m.LightweightExampleModule),
            },
            {
              path: '',
              pathMatch: 'full',
              redirectTo: 'default',
            },
          ],
        },
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'examples',
        },
      ],
      { useHash: true }
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
