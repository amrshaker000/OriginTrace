export type Device = {
  id: number
  name: string
  category: 'smartphones' | 'laptops' | 'tablets' | 'headphones' | 'cameras' | 'monitors'
  price: number
  originalPrice: number
  condition: 'excellent' | 'very-good' | 'good' | 'fair' | 'Excellent' | 'Very Good' | 'Good'
  rating: number
  reviews: number
  image: string
  certified: boolean
  warranty: string
  location: string
  seller?: string
  listedDate?: string
  specs?: Record<string, string>
}

export const devices: Device[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    category: 'smartphones',
    price: 899,
    originalPrice: 1199,
    condition: 'excellent',
    rating: 4.8,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    certified: true,
    warranty: '12 months',
    location: 'New York, NY',
    seller: 'TechGear Pro',
    listedDate: '2024-01-15',
    specs: {
      storage: '256GB',
      color: 'Space Black',
      battery: '95%',
      screen: 'Perfect'
    }
  },
  {
    id: 2,
    name: 'MacBook Pro M2',
    category: 'laptops',
    price: 1499,
    originalPrice: 1999,
    condition: 'very-good',
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop',
    certified: true,
    warranty: '18 months',
    location: 'San Francisco, CA',
    seller: 'Apple Reseller',
    listedDate: '2024-01-10',
    specs: {
      storage: '512GB',
      color: 'Silver',
      battery: '88%',
      screen: 'Minor scratches'
    }
  },
  {
    id: 3,
    name: 'iPad Air 5th Gen',
    category: 'tablets',
    price: 549,
    originalPrice: 699,
    condition: 'excellent',
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=800&fit=crop',
    certified: true,
    warranty: '12 months',
    location: 'Chicago, IL',
    seller: 'Tablet World',
    listedDate: '2024-01-20',
    specs: {
      storage: '64GB',
      color: 'Space Gray',
      battery: '92%',
      screen: 'Perfect'
    }
  },
  {
    id: 4,
    name: 'Sony WH-1000XM4',
    category: 'headphones',
    price: 249,
    originalPrice: 349,
    condition: 'good',
    rating: 4.6,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
    certified: true,
    warranty: '6 months',
    location: 'Los Angeles, CA',
    seller: 'Audio Elite',
    listedDate: '2024-01-12',
    specs: {
      color: 'Black',
      battery: '85%',
      condition: 'Good'
    }
  },
  {
    id: 5,
    name: 'Canon EOS R6',
    category: 'cameras',
    price: 1899,
    originalPrice: 2499,
    condition: 'excellent',
    rating: 4.9,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=800&fit=crop',
    certified: true,
    warranty: '24 months',
    location: 'Miami, FL',
    seller: 'Photo Pro',
    listedDate: '2024-01-08',
    specs: {
      shutter: '5,000 clicks',
      color: 'Black',
      condition: 'Excellent'
    }
  },
  {
    id: 6,
    name: 'Samsung Odyssey G9',
    category: 'monitors',
    price: 899,
    originalPrice: 1299,
    condition: 'very-good',
    rating: 4.8,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=800&fit=crop',
    certified: true,
    warranty: '12 months',
    location: 'Seattle, WA',
    seller: 'Monitor Masters',
    listedDate: '2024-01-18',
    specs: {
      resolution: '5120x1440',
      color: 'White',
      condition: 'Very Good'
    }
  }
]

export const getDeviceById = (id: number) => devices.find(d => d.id === id)
