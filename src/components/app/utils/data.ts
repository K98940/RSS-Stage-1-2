import level1 from '../../../assets/wordCollection/Level1.json';
import level2 from '../../../assets/wordCollection/Level2.json';
import level3 from '../../../assets/wordCollection/Level3.json';
import level4 from '../../../assets/wordCollection/Level4.json';
import level5 from '../../../assets/wordCollection/Level5.json';
import level6 from '../../../assets/wordCollection/Level6.json';
import { PageCollection } from '../../../types/types';
import { State } from '../State/state';

const levels = [
  {
    id: 'level1',
    name: 'Level 1',
    url: level1,
  },
  {
    id: 'level2',
    name: 'Level 2',
    url: level2,
  },
  {
    id: 'level3',
    name: 'Level 3',
    url: level3,
  },
  {
    id: 'level4',
    name: 'Level 4',
    url: level4,
  },
  {
    id: 'level5',
    name: 'Level 5',
    url: level5,
  },
  {
    id: 'level6',
    name: 'Level 6',
    url: level6,
  },
];

export class Data {
  state;

  constructor() {
    this.state = new State();
  }

  public getPage(): PageCollection | -1 {
    const rounds = this.getRounds();
    if (this.state.round >= rounds.length) return -1;
    const data = rounds.filter((_, i) => i === Number(this.state.round))[0];
    return data;
  }

  public getListLevels(): [string, string][] {
    return levels.map((level) => [level.id, level.name]);
  }

  public getListRounds(): [string, string][] {
    const rounds = this.getRounds();
    return rounds.map((_, i) => [`${i}`, `round ${i}`]);
  }

  private getRounds() {
    const level = levels.filter((el) => el.id === this.state.level)[0];
    return level.url.rounds;
  }
}
