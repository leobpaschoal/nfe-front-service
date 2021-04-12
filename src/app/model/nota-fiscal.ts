import { NotaFiscalDuplicata } from './nota-fiscal-duplicata';
import { NotaFiscalStatus } from './nota-fiscal-status';

export interface NotaFiscal {
  id: number;
  arquivoId: string;
  chave: string;
  dhRegistro: string;
  nomeArquivoOriginal: string;
  nomeDestinatario: string;
  nomeEmitente: string;
  numero: number;
  status: NotaFiscalStatus;
  duplicatas: NotaFiscalDuplicata[];
  valorNota: number;
  hasDuplicata: boolean;
  canDelete: boolean;
}
