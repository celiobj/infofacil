export interface ConsultaApontamento {
  CodigoApontamento: number;
  DataInicio: string;
  DataFim: string;
  DataEnvio: string;
  Observacao: string | null;
  changedDate: string;
  createdDate: string;
  OrdemServico: string;
  Turma: string;
  Operacao: string;
  CodCentroCusto: string;
  NomeCentroCusto: string;
  ConcatenacaoNome: string;
  NomeFilial: string;
  idCR: string;
  idFilial: number;
  IdEmpresa: string;
  NomeEmpresa: string;
  Matricula: string;
  Responsavel: string;
  StatusWeb: string;
  StatusMobile: string;
  GrupoOperacao: string;
  IdOperacao: number;
}