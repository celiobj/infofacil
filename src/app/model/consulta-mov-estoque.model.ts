export interface ConsultaMovEstoque {
  IdMovimentacao: number;
  IdERPLocalEstoque: string;
  NomeLocalEstoque: string;
  TipoMovimentacao: string;
  IdProduto: number;
  CodProdutoERP: string;
  Produto: string;
  Quantidade: number;
  UnidadeMedida: string;
  DataMovimentacao: string;
  UsuarioMovimentacao: string;
}