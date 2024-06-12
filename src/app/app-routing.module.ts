import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { ListarComponent } from './paginas/listar/listar.component';
import { ApiComponent } from './paginas/api/api.component';
import { LoginComponent } from './paginas/login/login.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CardapioComponent } from './paginas/cardapio/cardapio.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'cadastrar/:id', component: CadastrarComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cardapio', component: CardapioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'api', component: ApiComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
