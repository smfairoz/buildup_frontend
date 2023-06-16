import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { EnquireComponent } from './enquire/enquire.component';
import { PeComponent } from './pe/pe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanenqComponent } from './planenq/planenq.component';
import { InteriorsComponent } from './interiors/interiors.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LivingComponent } from './living/living.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { DecorComponent } from './decor/decor.component';
import { LightingsComponent } from './lightings/lightings.component';
import { ClosetsComponent } from './closets/closets.component';
import { SinkComponent } from './sink/sink.component';
import { FaucetComponent } from './faucet/faucet.component';
import { LhComponent } from './lh/lh.component';
import { ToolsComponent } from './tools/tools.component';
import { TileComponent } from './tile/tile.component';
import { MarbleComponent } from './marble/marble.component';
import { GraniteComponent } from './granite/granite.component';
import { InterlockComponent } from './interlock/interlock.component';
import { AggregateComponent } from './aggregate/aggregate.component';
import { GardenComponent } from './garden/garden.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    CartComponent,
 
    EnquireComponent,
      PeComponent,
      PlanenqComponent,
      InteriorsComponent,
      KitchenComponent,
      LivingComponent,
      BathroomComponent,
      DecorComponent,
      LightingsComponent,
      ClosetsComponent,
      SinkComponent,
      FaucetComponent,
      LhComponent,
      ToolsComponent,
      TileComponent,
      MarbleComponent,
      GraniteComponent,
      InterlockComponent,
      AggregateComponent,
      GardenComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
