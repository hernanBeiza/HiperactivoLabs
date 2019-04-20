import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatsAppComponent } from './whatsapp/whatsapp.component';

const routes: Routes = [
	{
        path: 'whatsapp',
        component: WhatsAppComponent
    },
    { 
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
