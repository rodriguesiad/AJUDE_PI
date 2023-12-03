import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Atendimento } from "src/app/models/atendimento.model";
import { Beneficiario } from "src/app/models/beneficiario.model";
import { Endereco } from "src/app/models/endereco.model";
import { Estado } from "src/app/models/estado.model";
import { Movimentacao } from "src/app/models/movimentacao.model";
import { Municipio } from "src/app/models/municipio.model";
import { Orgao } from "src/app/models/orgao.model";
import { Perfil } from "src/app/models/perfil.model";
import { SituacaoAtendimento } from "src/app/models/situacao-atendimento.model";
import { Usuario } from "src/app/models/usuario.model";

export const movimentacaoResolver: ResolveFn<Movimentacao> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
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
            login: 'maria@gmail.com',
            senha: '123',
            lotacoes: [{ id: 1, perfil: perfil, orgao: cras }, { id: 2, perfil: perfil, orgao: creas }]
        })

        const dados = new Endereco(
            estado,
            municipio,
            'Aureny III',
            'Rua 8',
            '20',
            '',
            '8890-182');

        const beneficiario = new Beneficiario({
            id: 1, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111',
            dataNascimento: new Date(1998, 9, 1), rg: '1111111', telefone: '63999889999',
            email: 'ana@gmail.com', cpfDosPais: 'Nenhum', endereco: dados
        })

        const situacao = new SituacaoAtendimento();
        situacao.id = 1;
        situacao.label = 'Em andamento';

        const atendimento = new Atendimento({
            id: 1, orgao: cras,
            beneficiario: beneficiario,
            tipoBeneficio: 'AUXILIO MORADIA',
            descricao: 'Durante o cadastro do atendimento de auxílio moradia para a família Melo, foi registrado que eles residem em uma casa de três quartos localizada na Rua das Flores, número 123, no bairro Esperança, na cidade de Cidade Feliz. A casa, de propriedade da família, apresenta bom estado de conservação e conta com infraestrutura básica de água, luz e saneamento. Entretanto, foi mencionado que a área é suscetível a inundações sazonais durante períodos chuvosos, o que tem gerado preocupação em relação à segurança e à habitabilidade do local para os membros da família. Durante a entrevista, a Sra. Melo expressou a necessidade urgente de melhorias estruturais para garantir um ambiente mais seguro e estável para sua família, principalmente para os três filhos pequenos. Esse cadastro detalhado será fundamental para o desenvolvimento de um plano de assistência personalizado, visando oferecer o suporte necessário para aprimorar as condições habitacionais e promover um ambiente mais seguro e adequado para a família.',
            dataInclusao: new Date(),
            usuarioInclusao: usuario,
            situacao: situacao
        })

        return new Movimentacao({
            id: 1,
            atendimento: atendimento,
            titulo: 'VISIITA DOMICILIAR',
            descricao: 'Foi realizada, no dia 26/11/2023, uma visita domiciliar como parte do atendimento de assistência social, foi possível realizar uma análise in loco das condições de moradia, interações familiares e recursos disponíveis. Essa experiência proporcionou insights fundamentais para uma abordagem mais abrangente das necessidades individuais e familiares, permitindo o planejamento de estratégias de intervenção direcionadas à promoção do bem-estar e à melhoria da qualidade de vida dos assistidos.',
            nomeDocumentos: ['imagem-casa.png', 'assinatura-permissao.pdf'],
            usuarioInclusao: usuario,
            perfilInclusao: usuario.nome + ' - ' + usuario.lotacoes[0].orgao.sigla + ' - ' + usuario.lotacoes[0].perfil.label,
            dataInclusao: new Date()
        })
    };
