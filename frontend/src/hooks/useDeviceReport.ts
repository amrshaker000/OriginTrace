import { useEffect, useState } from "react";
import { getDeviceReport, addDeviceReport } from "../ic/backend";

export interface DeviceReport {
  status: string;
  temperature: bigint;
  hash: string[];
}

export function useDeviceReport(deviceId: bigint) {
  const [data, setData] = useState<DeviceReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const report = await getDeviceReport(deviceId);
        setData(report);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [deviceId]);

  const addReport = async (report: DeviceReport) => {
    try {
      setLoading(true);
      setError(null);
      await addDeviceReport(deviceId, report);
      // Refresh the data after adding
      const updatedReport = await getDeviceReport(deviceId);
      setData(updatedReport);
    } catch (e: any) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, addReport };
}
