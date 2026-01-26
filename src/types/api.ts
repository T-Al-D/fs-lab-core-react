export interface ApiMeta {
  service: string;
  version: string;
  timestamp: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: string | null;
  meta: ApiMeta;
}

export interface HealthData {
  status: "ok" | "degraded" | "down";
}
