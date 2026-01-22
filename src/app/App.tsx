import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import { Layout } from "./Layout";

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}
