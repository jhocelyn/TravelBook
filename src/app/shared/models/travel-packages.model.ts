export interface TravelPackages {
  id:string;
  price:string;
  packageTitle:string;
  includes:string[];
  notIncluded:string[];
  optional:{title:string,price:string,currency:string}[],
  itinerary:{day:string,title:string,description:string}[]
  notes:string[];
  images:
    {alt:string; src:string; width:number; }[],
  hotelPricing: {
    hotelName: string;
    category: string;
    prices: {
      peruvian: {
        swb: number;
        dwb: number;
        tpl: number;
        chd: number;
      };
      foreign: {
        swb: number;
        dwb: number;
        tpl: number;
        chd: number;
      };
    };
  }[];
}
