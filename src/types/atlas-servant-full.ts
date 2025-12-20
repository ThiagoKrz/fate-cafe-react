export interface AtlasTrait {
  id: number;
  name: string;
}

export interface AtlasProfileStory {
  title?: string;
  text: string;
  unlock?: string;
}

export interface AtlasProfile {
  story?: AtlasProfileStory[];
}

export interface AtlasServantFull {
  id: number;
  name: string;
  className: string;
  rarity: number;

  attribute?: string;
  gender?: string;
  alignment?: string;

  traits?: AtlasTrait[];
  profile?: AtlasProfile;

  // IMAGENS NORMALIZADAS
  faces: string[];
  charaGraph: string[];
}
