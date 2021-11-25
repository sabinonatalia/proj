import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PgProdutosComponent } from './pg-produtos/pg-produtos.component';
import { PgUsuariosComponent } from './pg-usuarios/pg-usuarios.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  
  {path:'home', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'produtos', component: PgProdutosComponent},
  {path: 'usuarios', component: PgUsuariosComponent},
  {path: 'cadastro-usuarios', component: CadastroUsuarioComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'produto-edit/:id', component: ProdutoEditComponent},
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent },
  {path: 'usuarios-edit/:id', component: ProdutoDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
