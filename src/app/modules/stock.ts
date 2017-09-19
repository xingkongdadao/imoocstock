export class Stock {
  constructor(
    public id: number,
    public  name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){ }
}
