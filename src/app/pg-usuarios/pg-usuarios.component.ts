import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-pg-usuarios',
  templateUrl: './pg-usuarios.component.html',
  styleUrls: ['./pg-usuarios.component.css']
})
export class PgUsuariosComponent implements OnInit {

  user: Usuario = new Usuario()
  idUsuario = environment.id
  tipo =  environment.tipo
  tipoUsuario: string
  id = environment.id
  listaUsuario: Usuario[]
  nomeUsuario: string
  constructor(

    public authService: AuthService,
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.getAllUsuario()
  }

  getAllUsuario() {
    this.authService.getAllUsuario().subscribe((resp: Usuario[]) =>{
      this.listaUsuario =  resp
    })
  }

dadosUser(){
    let user = {
      nome: environment.nome,
      id: environment.id,
      tipo: environment.tipo
    }
    return user
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  findByNomeUsuario(){
    if (this.nomeUsuario == '') {
      this.getAllUsuario()
    } else {
      this.authService.getByNomeUsuario(this.nomeUsuario).subscribe((resp: Usuario[]) => {
        this.listaUsuario = resp
      })
    }
  }
}
