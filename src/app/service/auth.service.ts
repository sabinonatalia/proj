import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  login(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>("https://sisgest-vila-yara.herokuapp.com/usuarios/logar", usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>("https://sisgest-vila-yara.herokuapp.com/usuarios/cadastrar", usuario)
  }

  getAllUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://sisgest-vila-yara.herokuapp.com/usuarios', this.token)

  }

  getByNomeUsuario(nome: string): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`https://sisgest-vila-yara.herokuapp.com/nome/${nome}`, this.token)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  naoLogado(){
    let ok: boolean = false
    if(environment.token == ''){
      ok = true
    }
    return ok
  }

  dadosUser(){
    let user = {
      nome: environment.nome,
      id: environment.id,
      tipo: environment.tipo
    }
    return user
  }

  adm(){
    let ok: boolean = false

    if(environment.tipo == 'adm'){
      ok = true
    }

    return ok
  }

  
}
