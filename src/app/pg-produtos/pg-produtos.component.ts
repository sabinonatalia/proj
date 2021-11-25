
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-pg-produtos',
  templateUrl: './pg-produtos.component.html',
  styleUrls: ['./pg-produtos.component.css']
})
export class PgProdutosComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]
  user: Usuario = new Usuario()
  idUsuario = environment.id
  reverse = true
  nomeProduto: string
  constructor(
    private router: Router,
    private produtoService: ProdutosService,
    public auth: AuthService
  ) { }


  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      // alert("Sessão expirada, faça login novamente.")
      this.router.navigate(['/login'])
    }
    this.produtoService.refreshToken()
    this.findAllProduto()
  }
  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

  findByNomeProduto() {

    if (this.nomeProduto == '') {
      this.findAllProduto()
    } else {

      this.produtoService.getByNomeProduto(this.nomeProduto).subscribe((resp: Produto[]) => {
        this.listaProduto = resp
      })
    }
  }
}
