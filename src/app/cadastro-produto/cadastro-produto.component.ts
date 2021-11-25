import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]
  constructor(
    private router: Router,
    private produtoService: ProdutosService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if (environment.token == ''){
      // alert("Sessão expirada, faça login novamente.")
      this.router.navigate(['/login'])
    }

    if(environment.tipo != 'adm'){
      alert('Você não tem permissão de acessar o cadastro')
      this.router.navigate(['/produtos'])
    }
    
  }

  findAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProduto = resp

    })
  }


  cadastrar(){
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      this.router.navigate(['/produtos'])
      alert('Produto cadastrado com sucesso!')
      this.produto = new Produto()
      this.findAllProduto()
    })
  }

  
}
