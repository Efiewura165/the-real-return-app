export interface ShippingAddress {
  name: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  countryCode: string;
}

export interface DepositContent {
  eyebrow: string;
  title: string;
  description: string;
  amount: number;
  currency: string;
  fallbackNote: string;
}
