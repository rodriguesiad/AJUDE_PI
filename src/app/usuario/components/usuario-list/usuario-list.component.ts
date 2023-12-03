import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS } from '@angular/material/slide-toggle';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ConfirmationDialogService } from 'src/app/shared/services/confirm-dialog.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
  providers: [
    {
      provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
      useValue: { disableToggleValue: true },
    },
  ],
})
export class UsuarioListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'perfil', 'email', 'cpf', 'acoes'];
  usuarios: Usuario[] = [];
  totalRegistros = 0;
  filtro: string = "";
  pageSize = 5;
  pagina = 0

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service: UsuarioService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.carregarUsuarios();
    this.carregarTotalRegistros();
  }

  openConfirmationDialog(usuario: Usuario): void {
    let situacao = usuario.ativo ? 'desativar' : 'ativar';
    let situacaoTitle = usuario.ativo ? 'Desativar' : 'Ativar';
    const message = 'Você realmente deseja ' + situacao + ' a categoria  "' + usuario.nome + '"?'


    this.confirmationDialogService.openConfirmationDialog(
      situacaoTitle,
      message,
      () => {
        this.service.alterarSituacao(usuario.id, !usuario.ativo).subscribe({
          next: () => { this.ngOnInit() },
          error: (err) => {
            console.log(err);
          }
        })
      }
    );
  }

  carregarUsuarios(): void {
    if (this.filtro) {
      this.service.findByNomeOuCpf(this.filtro, this.pagina, this.pageSize).subscribe(data => { this.usuarios = data; })
    } else {
      this.service.findAll(this.pagina, this.pageSize).subscribe(data => { this.usuarios = data; })
    }
  }

  carregarTotalRegistros() {
    if (this.filtro) {
      this.service.countByNomeOuCpf(this.filtro).subscribe(data => {
        this.totalRegistros = data;
      });
    } else {
      this.service.count().subscribe(data => {
        this.totalRegistros = data;
      });
    }
  }

  paginar(event: PageEvent): void {
    this.pagina = event.pageIndex;
    this.pageSize = event.pageSize;
    this.carregarUsuarios();
  }

  aplicarFiltro() {
    this.carregarUsuarios();
    this.carregarTotalRegistros();
  }

  limparFiltro() {
    this.filtro = "";
    this.aplicarFiltro();
  }

}
