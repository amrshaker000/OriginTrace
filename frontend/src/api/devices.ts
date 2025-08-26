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

const JSON_HEADERS = { "Content-Type": "application/json" };

// Base API URL - adjust based on your backend setup
const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

export async function getDevices(): Promise<DeviceRow[]> {
  const res = await fetch(`${API_BASE}/devices`);
  if (!res.ok) throw new Error("Failed to load devices");
  return res.json();
}

export async function getDevice(id: string | number): Promise<DeviceRow> {
  const res = await fetch(`${API_BASE}/devices/${id}`);
  if (!res.ok) throw new Error("Failed to load device");
  return res.json();
}

export async function createDevice(payload: DeviceRow): Promise<{ ok: true }> {
  const res = await fetch(`${API_BASE}/devices`, {
    method: "POST",
    headers: JSON_HEADERS,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create device");
  return res.json();
}

export async function updateDevice(
  id: string | number,
  payload: Partial<DeviceRow>
): Promise<{ ok: true }> {
  const res = await fetch(`${API_BASE}/devices/${id}`, {
    method: "PUT",
    headers: JSON_HEADERS,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to update device");
  return res.json();
}

export async function deleteDevice(id: string | number): Promise<{ ok: true }> {
  const res = await fetch(`${API_BASE}/devices/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete device");
  return res.json();
}

export async function analyzeDevice(
  input: AnalyzeInput
): Promise<AnalyzeResult> {
  const res = await fetch(`${API_BASE}/analyze-device`, {
    method: "POST",
    headers: JSON_HEADERS,
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error("Failed to analyze device");
  return res.json();
}
