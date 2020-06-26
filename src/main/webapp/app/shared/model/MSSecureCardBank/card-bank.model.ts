export interface ICardBank {
  id?: number;
  codeEncoded?: string;
}

export class CardBank implements ICardBank {
  constructor(public id?: number, public codeEncoded?: string) {}
}
