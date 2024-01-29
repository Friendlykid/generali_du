import { Alert, Box } from "@mui/material";
import { Navigate } from "react-router-dom";

export default function Response({ response }) {
  if (!response) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <Box color="black">
      {response === 201 ? (
        <Alert severity="success">Úspěšně uloženo</Alert>
      ) : (
        <Alert severity="error">Neúspěšně uloženo</Alert>
      )}
    </Box>
  );
}
