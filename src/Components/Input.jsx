import { InputBase } from "@mui/material";

export default function Input({ value, setValue, id, type }) {
  const handleChange = (e) => {
    if (
      type === "name" &&
      /[^a-zA-ZěščřžýáíéůúĚŠČŘŽÝÁÍÉÚŮ]/.test(e.target.value)
    ) {
      return;
    }
    if (type === "number" && /[^0-9]/.test(e.target.value)) {
      return;
    }
    setValue(e.target.value);
  };
  return (
    <InputBase
      id={id}
      value={value}
      onChange={handleChange}
      sx={{ border: "2px solid black", paddingLeft: "2px", height: "30px" }}
      autoComplete="off"
    ></InputBase>
  );
}
