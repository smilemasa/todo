import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { Layout } from "./components/Layout";
import { TasksPage } from "./page/TasksPage";
import { SchedulePage } from "./page/SchedulePage";
import { ArchivePage } from "./page/ArchivePage";
import { SettingsPage } from "./page/SettingsPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

