export interface ConsultaSaldoEstoque {
  IdSaldoEstoque: number;
  IdERPLocalEstoque: string;
  NomeLocalEstoque: string;
  IdProduto: number;
  CodProdutoERP: string;
  Produto: string;
  Entradas: number;
  Apontamentos: number;
  TransferenciasRecebidas: number;
  TransferenciasEnviadas: number;
  DevolucoesRecebidas: number;
  DevolucoesEnviadas: number;
  Saldo: number;
  Ajuste: number;
  Estorno: number;
  NomeEmpresa: string;
  NomeFilial: string;
  CodCentroCusto: string;
}