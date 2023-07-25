import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggregateComponent } from './aggregate/aggregate.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { CartComponent } from './cart/cart.component';
import { ClosetsComponent } from './closets/closets.component';
import { DecorComponent } from './decor/decor.component';
import { EnquireComponent } from './enquire/enquire.component';
import { FaucetComponent } from './faucet/faucet.component';
import { GardenComponent } from './garden/garden.component';
import { GraniteComponent } from './granite/granite.component';

import { HomeComponent } from './home/home.component';
import { InteriorsComponent } from './interiors/interiors.component';
import { InterlockComponent } from './interlock/interlock.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LhComponent } from './lh/lh.component';
import { LightingsComponent } from './lightings/lightings.component';
import { LivingComponent } from './living/living.component';
import { LoginComponent } from './login/login.component';
import { MarbleComponent } from './marble/marble.component';
import { PeComponent } from './pe/pe.component';
import { PlanenqComponent } from './planenq/planenq.component';


import { RegisterComponent } from './register/register.component';
import { SinkComponent } from './sink/sink.component';
import { TileComponent } from './tile/tile.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {path:'hom',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'enqview',component:CartComponent},
  {path:'reg',component:RegisterComponent},
  { path:'pe', component: PeComponent },
  { path:'planenq',component:PlanenqComponent},
  { path:'en', component:EnquireComponent},
{path:'bedroom',component:InteriorsComponent},
{ path:'ki',component:KitchenComponent},
{path:'livi',component:LivingComponent},
{ path:'bath',component:BathroomComponent},
  {path:'dec',component:DecorComponent},
  {path:'lyt',component:LightingsComponent},
  {path:'closet',component:ClosetsComponent},
{path:'sink',component:SinkComponent},
{path:'faucet',component:FaucetComponent},
{path:'lh',component:LhComponent},
{path:'tools',component:ToolsComponent},
{path:'tile',component:TileComponent},
{path:'marble',component:MarbleComponent},
{path:'granite',component:GraniteComponent},
{path:'inter',component:InterlockComponent},
{path:'aggregate',component:AggregateComponent},
{path:'garden',component:GardenComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
