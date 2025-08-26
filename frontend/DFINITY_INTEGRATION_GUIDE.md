# 🚀 Dfinity Canister Integration Guide for OriginTrace

This guide provides step-by-step instructions for backend developers to integrate the OriginTrace frontend with Dfinity Internet Computer canisters.

## 📋 Frontend Status & Requirements

### ✅ **Completed Frontend Features**

1. **AI Chatbot System** (Buyers Only)
   - Dedicated `/chatbot` page with comprehensive AI features
   - Floating chat button on all buyer pages
   - Role-based access control (buyers only)
   - Dark mode optimized (light mode removed)
   - Product analysis, price comparison, warranty information
   - Blockchain verification explanations

2. **Role-Based Navigation**
   - Dynamic header with dropdown menus
   - Buyer Portal / Seller Portal separation
   - Protected routes with authentication
   - Role-specific feature visibility

3. **UI/UX Enhancements**
   - Always dark mode (light mode completely removed)
   - Responsive design for all screen sizes
   - Professional animations with Framer Motion
   - Comprehensive error handling and loading states

4. **Backend Integration Structure**
   - Pre-configured API endpoints (`src/api/devices.ts`)
   - Dfinity agent setup (`src/ic/agent.ts`, `src/ic/backend.ts`)
   - TypeScript interfaces matching backend schema

## 🔧 **Dependencies Already Installed**

```json
{
  "@dfinity/agent": "^3.2.2",
  "@dfinity/principal": "^3.2.2"
}
```

## 🛠 **Backend Integration Steps**

### 1. **Deploy Your Canister**

```bash
# Start local replica
dfx start --background

# Deploy your canister
dfx deploy

# Note the canister ID from the output
```

### 2. **Update Frontend Configuration**

Replace the placeholder canister ID in `src/ic/backend.ts`:

```typescript
// Replace this line:
const canisterId = "uxrrr-q7777-77774-qaaaq-cai"; // Placeholder

// With your actual canister ID:
const canisterId = "YOUR_ACTUAL_CANISTER_ID";
```

### 3. **Import Generated Declarations**

Replace the placeholder IDL factory:

```typescript
// Replace this:
const idlFactory = {
  // This will be replaced with the actual IDL factory from dfx
} as any;

// With this:
import { idlFactory } from "../../declarations/my_canister_project_backend";
```

### 4. **API Endpoints Implementation**

The frontend expects these REST API endpoints. Implement them in your backend:

#### **Devices API**

| Endpoint | Method | Purpose | Request Body | Response |
|----------|--------|---------|--------------|----------|
| `/api/devices` | GET | Get all devices | - | `DeviceRow[]` |
| `/api/devices/{id}` | GET | Get device by ID | - | `DeviceRow` |
| `/api/devices` | POST | Create device | `DeviceRow` | `{ok: true}` |
| `/api/devices/{id}` | PUT | Update device | `Partial<DeviceRow>` | `{ok: true}` |
| `/api/devices/{id}` | DELETE | Delete device | - | `{ok: true}` |
| `/api/analyze-device` | POST | AI device analysis | `AnalyzeInput` | `AnalyzeResult` |

#### **Data Types**

```typescript
export type DeviceRow = {
  device_id: number | string;
  category: string;
  brand: string;
  model: string;
  year: number;
  condition: "excellent" | "very-good" | "good" | "fair" | string;
  price: number;
  strengths?: string;
  weaknesses?: string;
  best_use_cases?: string;
};

export type AnalyzeInput = {
  device_type: string;
  primary_use: string;
  budget_usd: number;
  hard_constraints?: string;
  soft_preferences?: string;
  must_not_have?: string;
};

export type AnalyzeResult = {
  device_type: string;
  primary_use: string;
  budget_usd: number;
  matches?: Array<{ device_id: string | number; score: number }>;
  notes?: string;
};
```

### 5. **Canister Methods Required**

Implement these methods in your Motoko/Rust canister:

```motoko
// Device Reports (Blockchain Storage)
public func add_device_report(deviceId: Nat64, report: DeviceReport) : async () {}
public func get_device_report(deviceId: Nat64) : async ?DeviceReport {}

// Device Report Type
public type DeviceReport = {
  status: Text;
  temperature: Nat64;
  hash: [Text];
};
```

### 6. **Environment Variables**

Set up environment variables for different environments:

```bash
# .env.local (for development)
VITE_API_BASE_URL=http://localhost:8000/api

# .env.production
VITE_API_BASE_URL=https://your-api-domain.com/api
```

## 🔒 **Security Considerations**

1. **Authentication**
   - Implement proper JWT/session management
   - Validate user roles (buyer/seller) on backend
   - Protect sensitive endpoints

2. **Data Validation**
   - Validate all API inputs on backend
   - Sanitize user-generated content
   - Implement rate limiting

3. **Blockchain Security**
   - Verify device authenticity before storing on blockchain
   - Implement proper access controls for device reports
   - Use secure random number generation for device IDs

## 📱 **Frontend Features Ready for Backend**

### **AI Chatbot Integration Points**
- Product recommendations based on user preferences
- Real-time inventory queries
- Price comparison algorithms
- Warranty and certification lookups

### **User Management**
- Role-based authentication (buyer/seller)
- Profile management
- Purchase history
- Wishlist functionality

### **Device Management**
- Device listing and search
- Quality grading and certification
- Blockchain verification
- Report generation

### **Transaction Handling**
- Shopping cart functionality
- Order processing
- Payment integration points
- Escrow management

## 🧪 **Testing Endpoints**

Test your API endpoints using these curl commands:

```bash
# Get all devices
curl -X GET http://localhost:8000/api/devices

# Analyze device
curl -X POST http://localhost:8000/api/analyze-device \
  -H "Content-Type: application/json" \
  -d '{
    "device_type": "smartphone",
    "primary_use": "gaming",
    "budget_usd": 800,
    "hard_constraints": "iPhone only",
    "soft_preferences": "latest model"
  }'
```

## 🚀 **Deployment Checklist**

- [ ] Deploy canister and note the ID
- [ ] Update `canisterId` in `src/ic/backend.ts`
- [ ] Import actual IDL factory
- [ ] Implement all required API endpoints
- [ ] Test authentication flow
- [ ] Verify blockchain integration
- [ ] Set production environment variables
- [ ] Test AI chatbot data flows
- [ ] Validate role-based access control

## 📞 **Frontend-Backend Communication Flow**

1. **User Authentication**
   ```
   Frontend Login → Backend Validation → Role Assignment → Route Protection
   ```

2. **Device Operations**
   ```
   Frontend Request → API Validation → Database/Blockchain → Response
   ```

3. **AI Chatbot**
   ```
   User Query → AI Processing → Database Lookup → Formatted Response
   ```

4. **Blockchain Verification**
   ```
   Device Scan → Frontend Request → Canister Query → Verification Result
   ```

The frontend is fully prepared and ready for backend integration. All components are optimized for production, with comprehensive error handling, loading states, and a user-friendly interface designed specifically for the blockchain-based device marketplace.
