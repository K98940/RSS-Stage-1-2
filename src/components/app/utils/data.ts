import level1 from '../../../assets/wordCollection/Level1.json';
import { PageCollection } from '../../../types/types';

export class Data {
  public getPage(round: number): PageCollection {
    const rounds = level1.rounds;
    const data = rounds.filter((_, i) => i === round)[0];
    return data;
  }
}
