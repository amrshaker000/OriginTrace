import { Actor } from "@dfinity/agent";
import { agent } from "./agent";

// TODO: Replace with actual canister ID from canister_ids.json after dfx deploy
// For now, using a placeholder - update this after running dfx deploy
const canisterId = "uxrrr-q7777-77774-qaaaq-cai"; // Placeholder - replace with actual ID

// TODO: Import the actual idlFactory from dfx-generated declarations
// import { idlFactory } from "../../declarations/my_canister_project_backend";
// For now, creating a placeholder interface
interface DeviceReport {
  status: string;
  temperature: bigint;
  hash: string[];
}

interface BackendInterface {
  add_device_report: (deviceId: bigint, report: DeviceReport) => Promise<void>;
  get_device_report: (deviceId: bigint) => Promise<DeviceReport | null>;
}

// Placeholder idlFactory - replace with actual import
const idlFactory = {
  // This will be replaced with the actual IDL factory from dfx
} as any;

export const backend = Actor.createActor<BackendInterface>(idlFactory, {
  agent,
  canisterId,
});

// Example usage functions
export async function addDeviceReport(deviceId: bigint, report: DeviceReport) {
  try {
    await backend.add_device_report(deviceId, report);
    console.log(`Device report added for device ${deviceId}`);
  } catch (error) {
    console.error("Failed to add device report:", error);
    throw error;
  }
}

export async function getDeviceReport(deviceId: bigint): Promise<DeviceReport | null> {
  try {
    const report = await backend.get_device_report(deviceId);
    return report;
  } catch (error) {
    console.error("Failed to get device report:", error);
    throw error;
  }
}
