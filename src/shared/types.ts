export type Asset = {
  url: string;
  title: string;
};

export type Banner = {
  id: string;
  title: string;
  subtitle?: string;
  image?: Asset;
  link?: string;
};

export type TierKey = "tier1" | "tier2" | "normal";

export type TierRule = {
  key: TierKey;
  label: string;
  maxTickets: number;
};

export type SeatZone = {
  id: string;
  label: string;
  distanceFactor: number;
  basePrice: number;
  rows: number;
  cols: number;
};

export type SeatMapOrientation = "stage_top" | "screen_top";

export type SeatMap = {
  id: string;
  orientation: SeatMapOrientation;
  zones: SeatZone[];
};

export type Venue = {
  name: string;
  address: string;
  city: string;
  country: string;
  location?: {
    lat: number;
    lng: number;
  };
};

export type EventSchedule = {
  startAt: string;
  bookingOpensAt: string;
  bookingClosesAt?: string;
};

export type EventType = "concert" | "sports" | "movie" | "festival";

export type PriceCurve = "decrease_with_distance" | "increase_with_distance";

export type Event = {
  id: string;
  slug: string;
  title: string;
  type: EventType;
  currency: string;
  about?: string;
  schedule: EventSchedule;
  venue: Venue;
  tags: string[];
  isPromoted: boolean;
  banner?: Asset;
  gallery?: Asset[];
  seatMap: SeatMap;
  basePrice: number;
  priceCurve: PriceCurve;
  parkingAvailable: boolean;
};

export type GlobalConfig = {
  geoIpEndpoint: string;
  paymentGateways: string[];
  featureFlags: {
    parking: boolean;
    discounts: boolean;
    recommendations: boolean;
  };
};

export type RecommendationRule = {
  id: string;
  interestTags: string[];
  eventTags: string[];
};

export type EventSection = {
  id: string;
  title: string;
  slug: string;
  layout?: string;
  events: Array<{ uid: string }>;
};

