export interface ConsultaComposicao {
  IdComposicao: number;
  IdOperacao: number;
  Operacao: string;
  Recurso: string;
  Recomendado: number;
  Minimo: number;
  Maximo: number;
  Padrao: boolean;
}