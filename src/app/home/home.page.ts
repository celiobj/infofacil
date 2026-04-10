import { Component } from '@angular/core';
import { OdataService } from '../services/odata.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  loading = false;
  error: string | null = null;
  apontamentos: any[] = [];
  showDetails: Record<string, boolean> = {};
  searchTerm = '';

  constructor(private odataService: OdataService) { }

  get filteredApontamentos(): any[] {
    const termo = this.searchTerm.trim().toLowerCase();
    if (!termo) {
      return this.apontamentos;
    }

    return this.apontamentos.filter(item =>
      Object.values(item).some(value =>
        value !== null && value !== undefined && String(value).toLowerCase().includes(termo)
      )
    );
  }

  showApontamentos() {
    this.loading = true;
    this.error = null;

    // Simula carregamento
    setTimeout(() => {
      this.apontamentos = [
        {
          "CodigoApontamento": 212,
          "DataInicio": "2024-09-05T09:00:00.000Z",
          "DataFim": "2024-09-05T18:45:32.980Z",
          "DataEnvio": "2024-09-05T17:13:07.667Z",
          "Observacao": null,
          "changedDate": "2026-04-08T18:00:26.634Z",
          "createdDate": "2024-12-21T15:28:42.380Z",
          "OrdemServico": "OS PLANEP MG04 08/2024",
          "Turma": "TURMA MANUAL MG-04",
          "Operacao": "CONTROLE AS LAGARTAS - BIOLOGICO",
          "CodCentroCusto": "70003",
          "NomeCentroCusto": "Silvicultura - Zanini",
          "ConcatenacaoNome": "70003 - Silvicultura - Zanini",
          "NomeFilial": "ZANINI FLORESTAL",
          "NomeEmpresa": "ZANINI FLORESTAL",
          "Matricula": "000000",
          "Responsavel": "USUARIO TESTE",
          "GrupoOperacao": "CONTROLE FITOSSANITARIO",
          "IdOperacao": "CONTROLE AS LAGARTAS - BIOLOGICO",
          "StatusWeb": "APONTADO",
          "Empresa": "ZANINI FLORESTAL",
          "Fazenda": "FAZENDA TESTE",
          "Talhao": "TALHAO 01",
          "Produto": "PRODUTO TESTE",
          "Quantidade": 100,
          "Unidade": "KG",
          "DataCriacao": "2024-09-05T09:00:00.000Z",
          "DataModificacao": "2024-09-05T18:45:32.980Z"
        },
        {
          "CodigoApontamento": 213,
          "DataInicio": "2024-09-06T08:30:00.000Z",
          "DataFim": "2024-09-06T17:20:15.450Z",
          "DataEnvio": "2024-09-06T16:45:22.123Z",
          "Observacao": "Aplicação realizada com sucesso",
          "changedDate": "2026-04-08T18:00:26.634Z",
          "createdDate": "2024-12-21T15:28:42.380Z",
          "OrdemServico": "OS PLANEP MG04 08/2024",
          "Turma": "TURMA MANUAL MG-04",
          "Operacao": "IRRIGAÇÃO",
          "CodCentroCusto": "70003",
          "NomeCentroCusto": "Silvicultura - Zanini",
          "ConcatenacaoNome": "70003 - Silvicultura - Zanini",
          "NomeFilial": "ZANINI FLORESTAL",
          "NomeEmpresa": "ZANINI FLORESTAL",
          "Matricula": "000001",
          "Responsavel": "USUARIO TESTE 2",
          "GrupoOperacao": "MANUTENÇÃO",
          "IdOperacao": "IRRIGAÇÃO",
          "StatusWeb": "APONTADO",
          "Empresa": "ZANINI FLORESTAL",
          "Fazenda": "FAZENDA TESTE",
          "Talhao": "TALHAO 02",
          "Produto": null,
          "Quantidade": 5000,
          "Unidade": "L",
          "DataCriacao": "2024-09-06T08:30:00.000Z",
          "DataModificacao": "2024-09-06T17:20:15.450Z"
        },
        {
          "CodigoApontamento": 214,
          "DataInicio": "2024-09-07T07:15:00.000Z",
          "DataFim": "2024-09-07T16:30:45.780Z",
          "DataEnvio": "2024-09-07T15:50:33.567Z",
          "Observacao": null,
          "changedDate": "2026-04-08T18:00:26.634Z",
          "createdDate": "2024-12-21T15:28:42.380Z",
          "OrdemServico": "OS PLANEP MG04 08/2024",
          "Turma": "TURMA MANUAL MG-04",
          "Operacao": "ADUBAÇÃO",
          "CodCentroCusto": "70003",
          "NomeCentroCusto": "Silvicultura - Zanini",
          "ConcatenacaoNome": "70003 - Silvicultura - Zanini",
          "NomeFilial": "ZANINI FLORESTAL",
          "NomeEmpresa": "ZANINI FLORESTAL",
          "Matricula": "000002",
          "Responsavel": "USUARIO TESTE 3",
          "GrupoOperacao": "FERTILIZAÇÃO",
          "IdOperacao": "ADUBAÇÃO",
          "StatusWeb": "APONTADO",
          "Empresa": "ZANINI FLORESTAL",
          "Fazenda": "FAZENDA TESTE",
          "Talhao": "TALHAO 03",
          "Produto": "ADUBO NPK",
          "Quantidade": 200,
          "Unidade": "KG",
          "DataCriacao": "2024-09-07T07:15:00.000Z",
          "DataModificacao": "2024-09-07T16:30:45.780Z"
        },
        {
          "CodigoApontamento": 215,
          "DataInicio": "2024-09-08T10:00:00.000Z",
          "DataFim": "2024-09-08T19:15:22.340Z",
          "DataEnvio": "2024-09-08T18:30:11.890Z",
          "Observacao": "Condições climáticas favoráveis",
          "changedDate": "2026-04-08T18:00:26.634Z",
          "createdDate": "2024-12-21T15:28:42.380Z",
          "OrdemServico": "OS PLANEP MG04 08/2024",
          "Turma": "TURMA MANUAL MG-04",
          "Operacao": "PODA",
          "CodCentroCusto": "70003",
          "NomeCentroCusto": "Silvicultura - Zanini",
          "ConcatenacaoNome": "70003 - Silvicultura - Zanini",
          "NomeFilial": "ZANINI FLORESTAL",
          "NomeEmpresa": "ZANINI FLORESTAL",
          "Matricula": "000003",
          "Responsavel": "USUARIO TESTE 4",
          "GrupoOperacao": "MANUTENÇÃO",
          "IdOperacao": "PODA",
          "StatusWeb": "APONTADO",
          "Empresa": "ZANINI FLORESTAL",
          "Fazenda": "FAZENDA TESTE",
          "Talhao": "TALHAO 04",
          "Produto": null,
          "Quantidade": null,
          "Unidade": null,
          "DataCriacao": "2024-09-08T10:00:00.000Z",
          "DataModificacao": "2024-09-08T19:15:22.340Z"
        },
        {
          "CodigoApontamento": 216,
          "DataInicio": "2024-09-09T06:45:00.000Z",
          "DataFim": "2024-09-09T15:50:18.560Z",
          "DataEnvio": "2024-09-09T15:10:45.234Z",
          "Observacao": null,
          "changedDate": "2026-04-08T18:00:26.634Z",
          "createdDate": "2024-12-21T15:28:42.380Z",
          "OrdemServico": "OS PLANEP MG04 08/2024",
          "Turma": "TURMA MANUAL MG-04",
          "Operacao": "CONTROLE DE PRAGAS",
          "CodCentroCusto": "70003",
          "NomeCentroCusto": "Silvicultura - Zanini",
          "ConcatenacaoNome": "70003 - Silvicultura - Zanini",
          "NomeFilial": "ZANINI FLORESTAL",
          "NomeEmpresa": "ZANINI FLORESTAL",
          "Matricula": "000004",
          "Responsavel": "USUARIO TESTE 5",
          "GrupoOperacao": "CONTROLE FITOSSANITARIO",
          "IdOperacao": "CONTROLE DE PRAGAS",
          "StatusWeb": "APONTADO",
          "Empresa": "ZANINI FLORESTAL",
          "Fazenda": "FAZENDA TESTE",
          "Talhao": "TALHAO 05",
          "Produto": "INSETICIDA TESTE",
          "Quantidade": 50,
          "Unidade": "L",
          "DataCriacao": "2024-09-09T06:45:00.000Z",
          "DataModificacao": "2024-09-09T15:50:18.560Z"
        },
        {
          "CodigoApontamento": 217,
          "DataInicio": "2024-09-10T08:00:00.000Z",
          "DataFim": "2024-09-10T17:30:12.780Z",
          "DataEnvio": "2024-09-10T16:45:33.456Z",
          "Observacao": "Solo preparado adequadamente",
          "changedDate": "2026-04-08T18:00:26.634Z",
          "createdDate": "2024-12-21T15:28:42.380Z",
          "OrdemServico": "OS PLANEP MG04 08/2024",
          "Turma": "TURMA MANUAL MG-04",
          "Operacao": "PLANTIO",
          "CodCentroCusto": "70003",
          "NomeCentroCusto": "Silvicultura - Zanini",
          "ConcatenacaoNome": "70003 - Silvicultura - Zanini",
          "NomeFilial": "ZANINI FLORESTAL",
          "NomeEmpresa": "ZANINI FLORESTAL",
          "Matricula": "000005",
          "Responsavel": "USUARIO TESTE 6",
          "GrupoOperacao": "SILVICULTURA",
          "IdOperacao": "PLANTIO",
          "StatusWeb": "APONTADO",
          "Empresa": "ZANINI FLORESTAL",
          "Fazenda": "FAZENDA TESTE",
          "Talhao": "TALHAO 06",
          "Produto": "MUDAS EUCALIPTO",
          "Quantidade": 1000,
          "Unidade": "UN",
          "DataCriacao": "2024-09-10T08:00:00.000Z",
          "DataModificacao": "2024-09-10T17:30:12.780Z"
        },
        {
          "CodigoApontamento": 218,
          "DataInicio": "2024-09-11T09:30:00.000Z",
          "DataFim": "2024-09-11T18:20:45.120Z",
          "DataEnvio": "2024-09-11T17:40:22.789Z",
          "Observacao": null,
          "changedDate": "2026-04-08T18:00:26.634Z",
          "createdDate": "2024-12-21T15:28:42.380Z",
          "OrdemServico": "OS PLANEP MG04 08/2024",
          "Turma": "TURMA MANUAL MG-04",
          "Operacao": "COLHEITA",
          "CodCentroCusto": "70003",
          "NomeCentroCusto": "Silvicultura - Zanini",
          "ConcatenacaoNome": "70003 - Silvicultura - Zanini",
          "NomeFilial": "ZANINI FLORESTAL",
          "NomeEmpresa": "ZANINI FLORESTAL",
          "Matricula": "000006",
          "Responsavel": "USUARIO TESTE 7",
          "GrupoOperacao": "COLHEITA",
          "IdOperacao": "COLHEITA",
          "StatusWeb": "APONTADO",
          "Empresa": "ZANINI FLORESTAL",
          "Fazenda": "FAZENDA TESTE",
          "Talhao": "TALHAO 07",
          "Produto": "MADEIRA",
          "Quantidade": 150,
          "Unidade": "M³",
          "DataCriacao": "2024-09-11T09:30:00.000Z",
          "DataModificacao": "2024-09-11T18:20:45.120Z"
        },
        {
          "CodigoApontamento": 219,
          "DataInicio": "2024-09-12T07:00:00.000Z",
          "DataFim": "2024-09-12T16:45:33.670Z",
          "DataEnvio": "2024-09-12T16:00:44.321Z",
          "Observacao": "Monitoramento contínuo realizado",
          "changedDate": "2026-04-08T18:00:26.634Z",
          "createdDate": "2024-12-21T15:28:42.380Z",
          "OrdemServico": "OS PLANEP MG04 08/2024",
          "Turma": "TURMA MANUAL MG-04",
          "Operacao": "MONITORAMENTO",
          "CodCentroCusto": "70003",
          "NomeCentroCusto": "Silvicultura - Zanini",
          "ConcatenacaoNome": "70003 - Silvicultura - Zanini",
          "NomeFilial": "ZANINI FLORESTAL",
          "NomeEmpresa": "ZANINI FLORESTAL",
          "Matricula": "000007",
          "Responsavel": "USUARIO TESTE 8",
          "GrupoOperacao": "MONITORAMENTO",
          "IdOperacao": "MONITORAMENTO",
          "StatusWeb": "APONTADO",
          "Empresa": "ZANINI FLORESTAL",
          "Fazenda": "FAZENDA TESTE",
          "Talhao": "TALHAO 08",
          "Produto": null,
          "Quantidade": null,
          "Unidade": null,
          "DataCriacao": "2024-09-12T07:00:00.000Z",
          "DataModificacao": "2024-09-12T16:45:33.670Z"
        },
        {
          "CodigoApontamento": 220,
          "DataInicio": "2024-09-13T11:15:00.000Z",
          "DataFim": "2024-09-13T20:00:56.890Z",
          "DataEnvio": "2024-09-13T19:15:27.654Z",
          "Observacao": null,
          "changedDate": "2026-04-08T18:00:26.634Z",
          "createdDate": "2024-12-21T15:28:42.380Z",
          "OrdemServico": "OS PLANEP MG04 08/2024",
          "Turma": "TURMA MANUAL MG-04",
          "Operacao": "TRANSPORTE",
          "CodCentroCusto": "70003",
          "NomeCentroCusto": "Silvicultura - Zanini",
          "ConcatenacaoNome": "70003 - Silvicultura - Zanini",
          "NomeFilial": "ZANINI FLORESTAL",
          "NomeEmpresa": "ZANINI FLORESTAL",
          "Matricula": "000008",
          "Responsavel": "USUARIO TESTE 9",
          "GrupoOperacao": "LOGISTICA",
          "IdOperacao": "TRANSPORTE",
          "StatusWeb": "APONTADO",
          "Empresa": "ZANINI FLORESTAL",
          "Fazenda": "FAZENDA TESTE",
          "Talhao": "TALHAO 09",
          "Produto": "EQUIPAMENTOS",
          "Quantidade": 5,
          "Unidade": "UN",
          "DataCriacao": "2024-09-13T11:15:00.000Z",
          "DataModificacao": "2024-09-13T20:00:56.890Z"
        },
        {
          "CodigoApontamento": 221,
          "DataInicio": "2024-09-14T08:45:00.000Z",
          "DataFim": "2024-09-14T17:55:41.230Z",
          "DataEnvio": "2024-09-14T17:10:52.111Z",
          "Observacao": "Finalização da ordem de serviço",
          "changedDate": "2026-04-08T18:00:26.634Z",
          "createdDate": "2024-12-21T15:28:42.380Z",
          "OrdemServico": "OS PLANEP MG04 08/2024",
          "Turma": "TURMA MANUAL MG-04",
          "Operacao": "FINALIZAÇÃO",
          "CodCentroCusto": "70003",
          "NomeCentroCusto": "Silvicultura - Zanini",
          "ConcatenacaoNome": "70003 - Silvicultura - Zanini",
          "NomeFilial": "ZANINI FLORESTAL",
          "NomeEmpresa": "ZANINI FLORESTAL",
          "Matricula": "000009",
          "Responsavel": "USUARIO TESTE 10",
          "GrupoOperacao": "ADMINISTRATIVO",
          "IdOperacao": "FINALIZAÇÃO",
          "StatusWeb": "APONTADO",
          "Empresa": "ZANINI FLORESTAL",
          "Fazenda": "FAZENDA TESTE",
          "Talhao": "TALHAO 10",
          "Produto": null,
          "Quantidade": null,
          "Unidade": null,
          "DataCriacao": "2024-09-14T08:45:00.000Z",
          "DataModificacao": "2024-09-14T17:55:41.230Z"
        }
      ];
      this.showDetails = {};
      this.searchTerm = '';
      this.loading = false;
    }, 1000); // Simula delay de carregamento
  }

  showApontamentosAPI() {
    this.loading = true;
    this.error = null;
    this.apontamentos = [];

    this.odataService.getMetadatahttp().subscribe({
      next: (data) => {
        if (data && data.value) {
          this.apontamentos = data.value;
          this.showDetails = {};
          this.searchTerm = '';
        } else {
          this.error = 'Dados não encontrados na resposta da API';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = `Erro ao buscar dados: ${err.message || err}`;
        this.loading = false;
      }
    });
  }

  toggleDetails(apontamento: any) {
    const key = apontamento.CodigoApontamento ?? apontamento.IdOperacao ?? JSON.stringify(apontamento);
    this.showDetails[key] = !this.showDetails[key];
  }
}