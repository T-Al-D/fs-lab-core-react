import { useEffect, useState } from "react";
import { getHealth } from "../../services/api";

export function APIHealthCheck() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getHealth().then((res) => setStatus(res.status));
  }, []);

  return <p>Render Backend status: {status}</p>;
}
