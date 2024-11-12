import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Owner from "./pages/Owner";
import Admin from "./pages/Admin";
import Freelancer from "./pages/Freelancer";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile/>} />
        <Route element={<AppLayout/>} >
          <Route path="/owner" element={<Owner/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/freelancer" element={<Freelancer/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
