export enum CityName {
  amsterdam = "AMSTERDAM",
  berlin = "BERLIN",
  london = "LONDON",
  paris = "PARIS",
  warsaw = "WARSAW",
}

export type CityNames =
  | CityName.amsterdam
  | CityName.berlin
  | CityName.london
  | CityName.paris
  | CityName.warsaw;

export interface ICity {
  name: string;
}

export const cities: CityName[] = [
  CityName.amsterdam,
  CityName.berlin,
  CityName.london,
  CityName.paris,
  CityName.warsaw,
];
