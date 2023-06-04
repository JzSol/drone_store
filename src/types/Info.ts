export interface Currency {
  code: string;
  symbol: string;
  format: string;
}

export interface Price {
  value: string;
  currency: Currency;
}

export interface Option {
  label: string;
  price: Price;
  old_price: Price;
}

export interface Discount {
  amount: string;
  end_date: string;
}

export interface Image {
  main: string;
}

export interface ShippingTime {
  value: string;
  info: string;
}

export interface ShippingMethod {
  country: string;
  title: string;
  shipping_time: ShippingTime;
  cost: Price;
}

export interface LeadTime {
  value: string;
  info: string;
}

export interface Props {
  ready_to_ship: boolean;
  in_stock: boolean;
  fast_dispatch: boolean;
}

export interface Shipping {
  method: ShippingMethod;
  lead_time: LeadTime;
  props: Props;
}

export interface Reviews {
  rating: string;
  count: number;
  total_buyers: number;
}

export interface Product {
  name: string;
  tags: string[];
  options: Option[];
  discount: Discount;
  gallery: Image[];
  shipping: Shipping;
  reviews: Reviews;
}

export interface Info {
  success: number;
  product: Product;
}
