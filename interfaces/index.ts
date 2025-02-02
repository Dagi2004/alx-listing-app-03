interface Address {
  state: string;
  city: string;
  country: string;
}

interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  description: string;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string; // Use an empty string if no discount is available
}
