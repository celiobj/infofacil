export interface ConsultaLocalEstoque {
  IdLocalEstoque: number;
  Nome: string;
  IdERP: string;
  Tipo: string;
  IdEmpresa: string;
  NomeEmpresa: string;
  IdFilial: number;
  NomeFilial: string;
  IdCR: string;
  CodCentroCusto: string;
  NomeCentroCusto: string;
  ConcatenacaoNome: string;
  Ativo: boolean;
}