import { Alert, Box } from "@mui/material";
import { Navigate } from "react-router-dom";

export default function Response({ response }) {
  if (!response) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <Box color="black">
      {response === 201 ? (
        <Alert severity="success">Success! {response} code</Alert>
      ) : (
        <Alert severity="error">Something went wrong. {response} code</Alert>
      )}
    </Box>
  );
}
