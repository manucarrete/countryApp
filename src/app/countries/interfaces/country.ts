export interface Country {
    name: {
        common: string;
      };
    capital: string;
    population: number;
    flags: {
        png: string;
      };
    flag: string;
    ccn3: string;
    translations: {
      [key: string]: {
        common: string;
      }
    }
  }