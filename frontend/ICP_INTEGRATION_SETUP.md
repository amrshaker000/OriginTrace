# ICP Integration Setup Guide

This guide will help you set up the Internet Computer Protocol (ICP) integration for the OriginTrace platform.

## Prerequisites

1. **DFX SDK**: Install the DFX SDK for Internet Computer development
   ```bash
   sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
   ```

2. **Node.js**: Ensure you have Node.js 16+ installed

## Step 1: Install Dependencies

The ICP dependencies have already been installed:
```bash
npm install @dfinity/agent @dfinity/principal
```

## Step 2: Backend Canister Setup

1. **Create a new DFX project** (if you haven't already):
   ```bash
   dfx new my_canister_project_backend
   cd my_canister_project_backend
   ```

2. **Deploy your canisters**:
   ```bash
   dfx start --background
   dfx deploy
   ```

3. **Get the canister ID** from `canister_ids.json`:
   ```json
   {
     "my_canister_project_backend": {
       "ic": "your-mainnet-canister-id",
       "local": "your-local-canister-id"
     }
   }
   ```

## Step 3: Update Frontend Configuration

1. **Update the canister ID** in `src/ic/backend.ts`:
   ```typescript
   // Replace the placeholder with your actual canister ID
   const canisterId = "your-actual-canister-id";
   ```

2. **Import the actual IDL factory** (after running `dfx deploy`):
   ```typescript
   // Uncomment and update the path to your generated declarations
   import { idlFactory } from "../../declarations/my_canister_project_backend";
   ```

3. **Set up environment variables** (create `.env.local`):
   ```env
   VITE_API_BASE_URL=http://localhost:8000/api
   VITE_ICP_HOST=http://127.0.0.1:4943  # For local development
   # VITE_ICP_HOST=https://ic0.app      # For production
   ```

## Step 4: Test the Integration

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to the ICP Integration page**:
   - Go to `/icp-integration` in your browser
   - Test the device report form
   - Test the device analysis form

3. **Verify canister calls**:
   - Check the browser console for any errors
   - Verify that device reports are being stored on the blockchain
   - Test the API endpoints for device management

## Step 5: Production Deployment

1. **Deploy to mainnet**:
   ```bash
   dfx deploy --network ic
   ```

2. **Update configuration for production**:
   - Set `VITE_ICP_HOST=https://ic0.app`
   - Use the mainnet canister ID
   - Ensure all environment variables are set correctly

## API Endpoints

The following API endpoints are expected to be available:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/devices` | GET | Get all devices |
| `/api/devices/{id}` | GET | Get device by ID |
| `/api/devices` | POST | Create new device |
| `/api/devices/{id}` | PUT | Update device |
| `/api/devices/{id}` | DELETE | Delete device |
| `/api/analyze-device` | POST | Analyze device requirements |

## Canister Methods

The following canister methods should be implemented:

| Method | Parameters | Description |
|--------|------------|-------------|
| `add_device_report` | `(deviceId: nat64, report: DeviceReport)` | Add device report to blockchain |
| `get_device_report` | `(deviceId: nat64)` | Get device report from blockchain |

## Troubleshooting

### Common Issues

1. **Canister not found**: Ensure the canister ID is correct and the canister is deployed
2. **Agent connection failed**: Check if the ICP replica is running (`dfx start`)
3. **BigInt errors**: Ensure all nat64 values use BigInt (e.g., `1n`)
4. **CORS issues**: Configure your API server to allow requests from the frontend

### Debug Commands

```bash
# Check canister status
dfx canister status my_canister_project_backend

# View canister logs
dfx canister call my_canister_project_backend get_device_report '(1:nat64)'

# Check network status
dfx ping
```

## Next Steps

1. **Implement additional canister methods** for your specific use case
2. **Add Internet Identity integration** for user authentication
3. **Implement Bitcoin integration** for payments
4. **Add IPFS storage** for device images and documents
5. **Set up CI/CD** for automated deployment

## Support

For issues related to:
- **ICP/DFX**: Check the [Internet Computer documentation](https://internetcomputer.org/docs)
- **Frontend Integration**: Review the agent and actor patterns in the code
- **API Integration**: Test endpoints with Postman or similar tools
