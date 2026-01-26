import { useState } from "react";
import { getHealth } from "../../../services/api";

export function HealthCheckCard() {
  const [status, setStatus] = useState<"idle" | "loading" | string>("idle");

  const runCheck = async () => {
    setStatus("loading");
    const res = await getHealth();
    setStatus(res.status);
  };

  return (
    <div className="card">
      <h3> Render API Health</h3>
      <button onClick={runCheck}>
        <strong> Run </strong>
      </button>
      <p>Status: {status}</p>
    </div>
  );
}
