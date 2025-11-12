export interface AirbnbApi {
    accommodation: Array<AccommodationsType>,
    icons: Array<Photo>
}

export interface AccommodationsType {
    id: string,
    title: string,
    date: string,
    testimonials: Array<Testimonials>,
    hasBadge: boolean,
    host: string,
    slug: string,
    location: Location,
    price: number,
    rating: number,
    photos: Array<Photo>
}

export interface Testimonials {
    id: string,
    name: string,
    image: string,
    comment: string,
    rating: number,
    customerTime: number,
    createdAt: number,
    stayedAt: number,
}

export interface Photo {
    id: string,
    source: string,
    description: string,
    url: string
}

export interface Location {
    description: string,
    city: string,
    state: string,
    country: string
}