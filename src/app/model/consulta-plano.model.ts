export interface ConsultaPlano {
  IdCronograma: number;
  IdCalculoPlano: number;
  Projeto: string;
  CodTalhao: string;
  PercentualPrevisto: number;
  AreaPrevista: number;
  DataPrevista: string;
  CustoPrevisto: number;
  Tipo: string;
  Status: string;
  DataRealizada: string;
  DataCancelamento: string;
  Ciclo: number;
  Rotacao: number;
  PercentualRealizado: number;
  AreaRealizada: number;
  CustoRealizado: number;
  GrupoOperacao: string;
  IdOperacao: number;
  Operacao: string;
  OrdemServico: string;
  NomeEmpresa: string;
  NomeFilial: string;
  CustoComposicao: number;
}