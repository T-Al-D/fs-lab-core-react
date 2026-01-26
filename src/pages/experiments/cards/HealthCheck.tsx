import { useState } from "react";
import { getHealth } from "../../../services/api";
import type { HealthData } from "../../../types/api";

export function HealthCheckCard() {
  const [status, setStatus] = useState<
    HealthData["status"] | "idle" | "loading"
  >("idle");

  const [meta, setMeta] = useState<string | null>(null);

  const runCheck = async () => {
    setStatus("loading");

    try {
      const res = await getHealth();

      // if setMeta is not set
      if (res.success && res.data) {
        setStatus(res.data.status);
        setMeta(`${res.meta.service} · v${res.meta.version}`);
      } else {
        setStatus("down");
      }
    } catch {
      setStatus("down");
    }
  };

  return (
    <div className="card">
      <h3>Node JS API Health</h3>

      <button onClick={runCheck}>
        <strong>Run</strong>
      </button>

      <p>Status: {status}</p>
      {meta && <small>{meta}</small>}
    </div>
  );
}
