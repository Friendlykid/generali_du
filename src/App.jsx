import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Response from "./Components/Response";

const theme = createTheme({
  palette: {
    action: {
      disabledBackground: "#909090",
      disabled: "white",
    },
    primary: {
      main: "#c01b17",
    },
  },
  typography: {
    body2: {
      fontWeight: 700,
      fontSize: "1rem",
    },
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    button: {
      textTransform: "none",
      "&:disabled": {
        color: "white",
        background: "#909090",
      },
    },
  },
});
function App() {
  const [response, setResponse] = useState("preparing");
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Form response={response} setResponse={setResponse} />}
          />
          <Route path="/response" element={<Response response={response} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
