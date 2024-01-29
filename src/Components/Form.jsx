import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Input from "./Input";
import SelectInput from "./SelectInput";
import createNewPolicy from "../utils/CreateNewPolicy";
import { Navigate } from "react-router-dom";

export default function Form({ response, setResponse }) {
  const [insuranceType, setInsuranceType] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  async function handleClick() {
    const status = await createNewPolicy();
    setResponse(status);
  }

  if (response !== "preparing") {
    return <Navigate to="/response" replace={true} />;
  }

  return (
    <Stack
      bgcolor="#f2f2f2"
      direction="column"
      p={3}
      gap={1}
      color="black"
      width="250px"
    >
      <Typography variant="h4">New policy</Typography>
      <Typography variant="body2">Insurance type</Typography>
      <SelectInput selected={insuranceType} setSelected={setInsuranceType} />
      <Typography variant="body2">Name</Typography>
      <Input id="select-name" value={name} setValue={setName} type="name" />
      <Typography variant="body2">Surname</Typography>
      <Input
        id="select-surname"
        value={surname}
        setValue={setSurname}
        type="name"
      />
      <Typography variant="body2">Policy number</Typography>
      <Input
        id="select-policy-number"
        value={policyNumber}
        setValue={setPolicyNumber}
        type="number"
      />
      <Button
        variant="contained"
        sx={{ marginTop: "5px", color: "white" }}
        disabled={
          name === "" ||
          surname === "" ||
          policyNumber === "" ||
          insuranceType === ""
        }
        onClick={handleClick}
      >
        Submit
      </Button>
    </Stack>
  );
}
