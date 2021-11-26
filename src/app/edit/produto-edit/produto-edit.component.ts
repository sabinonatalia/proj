import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { AuthService } from 'src/app/service/auth.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto = new Produto()
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == ''){
    alert("Sessão expirada, faça login novamente.")
      this.router.navigate(['/login'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp
    })
  }

  atualizar(){
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      alert('Produto atualizado com sucesso!')
      this.router.navigate(['/produtos'])
    })
  }
}
