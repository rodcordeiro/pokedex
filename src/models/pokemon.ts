export class FavPokemon {
  public _id?: number;
  public index: number;
  public name: string;
  public img_url: string;

  constructor(index?: number, name?: string, img_url?: string) {
    this.index = Number(index);
    this.name = String(name);
    this.img_url = String(img_url);
  }
}
