export interface IService {
  getDatos(): Promise<any>;

  getDato(id: string): Promise<any>;

  createDato(avion: any): void;

  updateDato(id: string): Promise<any>;

  deleteDato(id: string): Promise<any>;
}
