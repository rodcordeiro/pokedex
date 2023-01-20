export class FavPokemon {
  public _id?: number;
  public index: number;
  public name: string;

  constructor(index?: number, name?: string) {
    this.index = Number(index);
    this.name = String(name);
  }
}
