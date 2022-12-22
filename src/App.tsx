import styles from "./App.module.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
