
export type Language = 'zh' | 'en';

export interface Trigram {
  name: string;
  nameEn: string;
  pinyin: string;
  symbol: string;
  nature: string;
  natureEn: string;
  attribute: string;
  attributeEn: string;
  lines: number[];
}

export interface User {
  username: string;
  email: string;
  avatar?: string;
  preferredLanguage?: Language;
}

export interface Hexagram {
  number: number;
  name: string;
  nameEn: string;
  pinyin: string;
  binary: string;
  upperTrigram: string;
  lowerTrigram: string;
  judgment: string;
  judgmentEn: string;
  image: string;
  imageEn: string;
  meaning: string;
  meaningEn: string;
  wisdom?: string;
  fuxiIndex?: number;    
  solarTerm?: string;   
  solarTermEn?: string;
  direction?: string;   
}

export type ViewState = 'grid' | 'detail' | 'cast' | 'study' | 'compass' | 'auth';
