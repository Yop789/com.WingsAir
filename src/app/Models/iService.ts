export interface IService {
  getDatos(): Promise<any>;

  getDato(id: string): Promise<any>;

  createDato(avion: any): void;

  updateDato(dto: any): void;

  deleteDato(id: string): Promise<any>;
}
