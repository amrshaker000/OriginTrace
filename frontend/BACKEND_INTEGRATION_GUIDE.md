# OriginTrace Frontend - Backend Integration Guide

## Project Overview

OriginTrace is a blockchain-powered marketplace for certified used electronics, built with React, TypeScript, and Vite. The frontend is now complete and ready for backend integration.

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom dark theme
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Error Handling**: React Error Boundary
- **Code Splitting**: React.lazy with Suspense

## Key Features Implemented

### 1. AI Chatbot System
- **Component**: `src/components/BuyerChatbot.tsx`
- **Access**: Buyers only (role-based access control)
- **Features**:
  - Comprehensive buyer assistance
  - Device recommendations
  - Warranty information
  - Price comparisons
  - Blockchain verification guidance
  - Quick action buttons
  - Real-time chat interface
  - Popup button on all buyer pages

### 2. Role-Based Access Control
- **Buyer Features**: AI chatbot, buyer portal, my certifications
- **Seller Features**: Seller portal, device certification
- **Navigation**: Dynamic based on user role
- **Authentication**: Login/logout system with localStorage persistence

### 3. Enhanced Navigation
- **Structure**: Organized into folders (Marketplace, Services, Company)
- **Role-based**: Different links shown for buyers vs sellers
- **Responsive**: Mobile-friendly dropdown menus

### 4. Blockchain Technology Integration
- **HowToUse Page**: Comprehensive blockchain information
- **Technical Specs**: Internet Computer integration details
- **Features**: Decentralized storage, smart contracts, security

## API Integration Points

### Authentication
```typescript
// Current implementation uses localStorage
// Backend should provide:
interface User {
  id: string
  name: string
  email: string
  role: 'buyer' | 'seller'
  avatar?: string
}

// API endpoints needed:
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me
```

### Device Management
```typescript
// Device data structure
interface Device {
  id: number
  name: string
  price: number
  originalPrice: number
  condition: 'Excellent' | 'Very Good' | 'Good' | 'Fair'
  rating: number
  reviews: number
  image: string
  certified: boolean
  warranty: string
  location: string
  category: string
  specifications: Record<string, any>
  blockchainCertificate?: string
}

// API endpoints needed:
GET /api/devices
GET /api/devices/:id
POST /api/devices (sellers only)
PUT /api/devices/:id (sellers only)
DELETE /api/devices/:id (sellers only)
```

### Certification System
```typescript
// Certification data structure
interface Certification {
  id: string
  deviceId: number
  certificateHash: string
  inspectionReport: {
    hardware: any
    performance: any
    cosmetic: any
    battery: any
  }
  blockchainTransaction: string
  createdAt: Date
  expiresAt?: Date
}

// API endpoints needed:
POST /api/certifications
GET /api/certifications/:id
GET /api/certifications/device/:deviceId
POST /api/certifications/verify
```

### AI Chatbot Integration
```typescript
// Current implementation is simulated
// Backend should provide:
interface ChatMessage {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  suggestions?: string[]
}

// API endpoints needed:
POST /api/chat/message
GET /api/chat/history
POST /api/chat/quick-actions
```

## File Structure

```
src/
├── components/
│   ├── BuyerChatbot.tsx      # AI chatbot for buyers
│   ├── Navbar.tsx            # Navigation with role-based access
│   ├── Footer.tsx            # Enhanced footer
│   ├── DeviceCard.tsx        # Device display component
│   ├── DeviceReportForm.tsx  # Device reporting
│   ├── DeviceAnalysisForm.tsx # Device analysis
│   └── Modal.tsx             # Reusable modal
├── pages/
│   ├── Home.tsx              # Landing page
│   ├── Marketplace.tsx       # Main marketplace
│   ├── Buyer.tsx             # Buyer dashboard
│   ├── Seller.tsx            # Seller dashboard
│   ├── DeviceCertification.tsx # Certification process
│   ├── HowToUse.tsx          # Enhanced with blockchain info
│   ├── About.tsx             # About page
│   ├── Login.tsx             # Authentication
│   └── DeviceDetails.tsx     # Device details
├── hooks/
│   └── useDeviceReport.ts    # Device reporting hook
├── data/
│   └── devices.ts            # Mock device data
├── api/
│   └── devices.ts            # API integration
├── ic/
│   ├── agent.ts              # ICP agent setup
│   └── backend.ts            # Backend integration
└── App.tsx                   # Main app with context
```

## Key Components for Backend Integration

### 1. App.tsx
- **Context Provider**: Global state management
- **Authentication**: User login/logout handling
- **Role-based Routing**: Protected routes
- **AI Chatbot**: Buyer-only access
- **Error Boundaries**: Error handling

### 2. BuyerChatbot.tsx
- **Current State**: Simulated AI responses
- **Backend Needs**: Real AI integration
- **Features**: Device recommendations, warranty info, pricing
- **Integration**: Replace `generateAIResponse` with API calls

### 3. Navbar.tsx
- **Role-based Navigation**: Dynamic menu items
- **Chatbot Toggle**: Integration with global chatbot state
- **Authentication**: Login/logout buttons

### 4. Device Management
- **Current**: Mock data in `src/data/devices.ts`
- **Backend**: Replace with real API calls
- **Certification**: Blockchain integration needed

## Environment Variables Needed

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8000/api
VITE_WS_URL=ws://localhost:8000/ws

# Blockchain Configuration
VITE_ICP_CANISTER_ID=your_canister_id
VITE_ICP_NETWORK=local # or mainnet

# AI Chatbot
VITE_AI_API_KEY=your_ai_api_key
VITE_AI_ENDPOINT=https://api.openai.com/v1/chat/completions

# Authentication
VITE_JWT_SECRET=your_jwt_secret
VITE_AUTH_DOMAIN=your_auth_domain
```

## Backend Requirements

### 1. Authentication System
- JWT-based authentication
- Role-based access control (buyer/seller)
- Session management
- Password reset functionality

### 2. Device Management API
- CRUD operations for devices
- Image upload and storage
- Search and filtering
- Pagination support

### 3. Certification System
- Blockchain integration (Internet Computer)
- Device inspection workflow
- Certificate generation and verification
- QR code generation

### 4. AI Chatbot Backend
- Integration with AI service (OpenAI, Claude, etc.)
- Context management
- Response caching
- User conversation history

### 5. Payment Integration
- Stripe/PayPal integration
- Escrow system
- Refund processing
- Transaction history

### 6. Notification System
- Real-time notifications
- Email notifications
- Push notifications
- In-app messaging

## Security Considerations

1. **Authentication**: Secure JWT implementation
2. **API Security**: Rate limiting, CORS, input validation
3. **Blockchain**: Secure key management
4. **Data Protection**: GDPR compliance
5. **File Upload**: Secure image storage
6. **Payment**: PCI DSS compliance

## Performance Optimizations

1. **Code Splitting**: Already implemented with React.lazy
2. **Image Optimization**: Implement lazy loading
3. **Caching**: API response caching
4. **CDN**: Static asset delivery
5. **Database**: Proper indexing and queries

## Testing Requirements

1. **Unit Tests**: Component testing
2. **Integration Tests**: API integration
3. **E2E Tests**: User workflow testing
4. **Security Tests**: Authentication and authorization
5. **Performance Tests**: Load testing

## Deployment Checklist

1. **Environment Variables**: All required variables set
2. **API Endpoints**: All endpoints implemented and tested
3. **Database**: Properly configured and migrated
4. **Blockchain**: Canister deployed and configured
5. **SSL Certificate**: HTTPS enabled
6. **Monitoring**: Error tracking and analytics
7. **Backup**: Database and file backup strategy

## Next Steps for Backend Developer

1. **Set up API server** with required endpoints
2. **Implement authentication system** with JWT
3. **Create database schema** for devices, users, certifications
4. **Integrate blockchain** (Internet Computer)
5. **Set up AI chatbot backend** with real AI service
6. **Implement payment system** with escrow
7. **Add real-time features** (WebSocket)
8. **Set up monitoring and logging**
9. **Deploy and test** all integrations

## Contact Information

For any questions about the frontend implementation, please refer to the code comments and this documentation. The frontend is production-ready and waiting for backend integration.
