import { Component } from '@angular/core';
import { EncaminhamentoDownloadModalComponent } from '../modal/encaminhamento-download-modal/encaminhamento-download-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Atendimento } from 'src/app/models/atendimento.model';
import { Encaminhamento } from 'src/app/models/encaminhamento.model';
import { Estado } from 'src/app/models/estado.model';
import { Municipio } from 'src/app/models/municipio.model';
import { Orgao } from 'src/app/models/orgao.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Beneficiario } from 'src/app/models/beneficiario.model';
import { PageEvent } from '@angular/material/paginator';
import { EncaminhamentoService } from 'src/app/services/encaminhamento.service';
import { Perfil } from 'src/app/models/perfil.model';

@Component({
  selector: 'app-encaminhamento-list',
  templateUrl: './encaminhamento-list.component.html',
  styleUrls: ['./encaminhamento-list.component.css']
})
export class EncaminhamentoListComponent {
  encaminhamentos: Encaminhamento[] = [];
  encaminhamento: Encaminhamento;

  size = 5;
  page = 0;
  pageEvent: PageEvent | undefined;

  constructor(private encaminhamentoService: EncaminhamentoService, public dialog: MatDialog) {
    this.encaminhamento = this.cargaDados();
    this.encaminhamentos = [this.encaminhamento, this.encaminhamento, this.encaminhamento, this.encaminhamento, this.encaminhamento, this.encaminhamento];
  }

  isCadastro() {
    this.encaminhamentoService.setIsCadastro(true);
  }

  openDialog(encaminhamento: Encaminhamento) {
    const dialogRef = this.dialog.open(EncaminhamentoDownloadModalComponent, {
      width: "44%",
      height: "96%",
      data: { encaminhamento }
    })
  }

  handlePage(event: PageEvent): void {
    this.page = event.pageIndex;
    this.size = event.pageSize;
  }

  cargaDados(): Encaminhamento {
    const estado = new Estado(1, "Tocantins", "TO");
    const municipio = new Municipio(1, "Palmas", estado);
    const cras = new Orgao({ id: 2, nome: 'Centro de Referência de Assistência Social', sigla: 'CRAS', municipio: municipio, estado: estado, ativo: true },);
    const creas = new Orgao({ id: 3, nome: 'Centro de Ref. Especializado de Ass. Social', sigla: 'CREAS', municipio: municipio, estado: estado, ativo: true },);
    const perfil = new Perfil();
    perfil.id = 1;
    perfil.label = "Administrador";

    const usuario = new Usuario({
      id: 1, nome: 'Maria de Souza',
      cpf: '474.112.440-15',
      email: 'maria@gmail.com',
      senha: '123',
      lotacoes: [{ id: 1, perfil: perfil, orgao: cras }, { id: 2, perfil: perfil, orgao: creas }]
    })

    const beneficiario = new Beneficiario({
      id: 1, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111',
      dataNascimento: new Date(1998, 9, 1), rg: '1111111', telefone: '63999889999',
      email: 'ana@gmail.com', cpfDosPais: 'Nenhum', cep: '8890-182',
      estado: estado, municipio: municipio, bairro: 'Aureny III',
      logradouro: 'Rua 8', numero: '20', complemento: ' '
    })

    const atendimento = new Atendimento({
      id: 1, orgaoAtual: cras,
      beneficiario: beneficiario,
      tipoBeneficio: 'AUXILIO MORADIA',
      descricao: 'Durante o cadastro do atendimento de auxílio moradia para a família Melo, foi registrado que eles residem em uma casa de três quartos localizada na Rua das Flores, número 123, no bairro Esperança, na cidade de Cidade Feliz. A casa, de propriedade da família, apresenta bom estado de conservação e conta com infraestrutura básica de água, luz e saneamento. Entretanto, foi mencionado que a área é suscetível a inundações sazonais durante períodos chuvosos, o que tem gerado preocupação em relação à segurança e à habitabilidade do local para os membros da família. Durante a entrevista, a Sra. Melo expressou a necessidade urgente de melhorias estruturais para garantir um ambiente mais seguro e estável para sua família, principalmente para os três filhos pequenos. Esse cadastro detalhado será fundamental para o desenvolvimento de um plano de assistência personalizado, visando oferecer o suporte necessário para aprimorar as condições habitacionais e promover um ambiente mais seguro e adequado para a família.',
      dataInclusao: new Date(),
      usuarioInclusao: usuario,
      perfilInclusao: usuario.nome + ' - ' + usuario.lotacoes[0].orgao.sigla + ' - ' + usuario.lotacoes[0].perfil.label,
      ativo: true
    })

    return new Encaminhamento({
      id: 1,
      atendimento: atendimento,
      orgaoOrigem: cras,
      orgaoDestino: creas,
      motivo: 'Encaminhamos o atendimento atual para melhor análise do CREAS',
      usuarioInclusao: usuario,
      perfilInclusao: usuario.nome + ' - ' + usuario.lotacoes[0].orgao.sigla + ' - ' + usuario.lotacoes[0].perfil.label,
      dataInclusao: new Date()
    })
  }


}
