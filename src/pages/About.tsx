export function About() {
  return (
    <>
      <h1>About Fullstack-Lab</h1>

      <section>
        <p>
          Fullstack-Lab is a personal playground for experimenting with modern
          fullstack architectures, benchmarking technologies and exploring
          software design concepts.
        </p>

        <p>
          The project combines multiple backend implementations with automated
          measurement pipelines to compare performance characteristics and
          observe system behavior over time.
        </p>
      </section>

      <section>
        <h2>🏗 Architecture</h2>
        <ul>
          <li>⚛️ React frontend for dashboards and data visualization</li>
          <li>🟢 Node.js backend</li>
          <li>🐹 Go backend</li>
          <li>🐍 Python backend</li>
          <li>☁️ Services deployed on Render</li>
        </ul>
      </section>

      <section>
        <h2>📊 Data Pipeline</h2>
        <ul>
          <li>⏱ GitHub cron jobs measuring backend response times</li>
          <li>🗄 Metrics stored in a PostgreSQL database (Supabase)</li>
          <li>📈 Dashboard visualizing performance trends</li>
          <li>🔄 Scheduled data collection and processing</li>
        </ul>
      </section>

      <section>
        <h2>🧠 Experiments</h2>
        <ul>
          <li>⚙️ Backend performance comparisons</li>
          <li>📊 Long-term system metric tracking</li>
          <li>🔬 Data pipelines for experimentation</li>
          <li>🤖 Potential machine learning experiments on collected data</li>
        </ul>
      </section>
    </>
  );
}
