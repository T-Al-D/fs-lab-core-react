import type { HealthData } from "../../../types/api";
// react-hook
import { useState } from "react";

// specified prop for this generic component
type GenericHealthCheckCardProps = {
  label: string;
  provider: () => Promise<{
    success: boolean;
    data: HealthData | null;
    meta: {
      service: string;
      version: string;
    };
  }>;
};

export function GenericHealthCheckCard({
  label,
  provider,
}: GenericHealthCheckCardProps) {
  // init setStatus with idle
  const [status, setStatus] = useState<
    HealthData["status"] | "idle" | "loading"
  >("idle");

  const [meta, setMeta] = useState<string | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  // event-handler
  const runCheck = async () => {
    // clear old info
    setMeta(null);
    setDuration(null);
    setStatus("loading");

    try {
      const start = performance.now();

      // wait for a response from API call
      const res = await provider();

      // measurement of time
      setDuration(performance.now() - start);

      // if format is acceptable, inherit information from res
      if (res.success && res.data) {
        setStatus(res.data.status);
        setMeta(`${res.meta.service} (v${res.meta.version})`);
      } else {
        setStatus("down");
      }
    } catch (e) {
      // in case of failure -> error handeling
      setStatus("down");

      if (e instanceof Error) {
        setMeta(e.message);
      } else {
        setMeta("unknown error");
      }
    }
  };

  // the actual react component!
  return (
    <div className="card">
      <h3>{label}</h3>

      {/* event handler on button click, prevent spamming */}
      <button onClick={runCheck} disabled={status === "loading"}>
        <strong>Run</strong>
      </button>

      {/* changeing color depending on status(class) in CSS */}
      <p className={`status status-${status}`}>Status: {status}</p>

      {/* only show if string */}
      {meta && <small>{meta}</small>}

      {/* duration is in milliseconds */}
      {duration !== null && <small> Duration: {Math.round(duration)} ms</small>}
    </div>
  );
}
