import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token ={
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }
  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://sisgest-vila-yara.herokuapp.com/produtos', this.token)
  }

  getByIdProduto(id:number): Observable <Produto>{
    return this.http.get<Produto>(`https://sisgest-vila-yara.herokuapp.com/produtos/${id}`, this.token)

  }
  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://sisgest-vila-yara.herokuapp.com/produtos/cadastrar', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('https://sisgest-vila-yara.herokuapp.com/produtos', produto, this.token)
  }

  deleteProduto(id: number):Observable<Produto>{
    return this.http.delete<Produto>(`https://sisgest-vila-yara.herokuapp.com/produtos/produto/${id}`, this.token)

  }

  getByNomeProduto(nome: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://sisgest-vila-yara.herokuapp.com/produtos/nome/${nome}`, this.token)
  }
  
}
