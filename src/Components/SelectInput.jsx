import { Box, Popover, Stack, SvgIcon } from "@mui/material";
import { useState } from "react";
import getInsuranceTypes from "../utils/GetInsuranceTypes";
import { useQuery } from "@tanstack/react-query";

export default function SelectInput({ selected, setSelected }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const insuranceTypesQuery = useQuery({
    queryKey: ["insuranceTypes"],
    queryFn: getInsuranceTypes,
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInsuranceClick = (selectedType) => {
    setSelected(selectedType);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onClick={handleClick}>
        <Stack direction="row" gap="0" width="100%" height="30px">
          <Box
            sx={{ border: "2px solid black", paddingLeft: "2px", flex: "1" }}
          >
            {selected}
          </Box>
          <Box border="2px solid black" width="10%">
            <SvgIcon>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="null"
                style={{ vectorEffect: "non-scaling-stroke" }}
              >
                <g id="Layer_1">
                  <title>Layer 1</title>
                  <path
                    stroke="#000"
                    strokeWidth="2"
                    id="svg_1"
                    d="m3.42367,3.12049l8.59194,18.5073l8.91063,-18.59347l-17.50257,0.08617z"
                    opacity="NaN"
                    fill="none"
                  />
                </g>
              </svg>
            </SvgIcon>
          </Box>
        </Stack>
      </div>
      <Popover
        id={"insurance-types"}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ transform: "translateX(-2px)" }}
      >
        <Stack direction="column" width="100%" borderRadius={0}>
          {insuranceTypesQuery.isFetched &&
            insuranceTypesQuery.data.map((type) => (
              <div onClick={() => handleInsuranceClick(type)} key={type}>
                <Box
                  border="2px solid black"
                  height="30px"
                  width="250px"
                  bgcolor="#f2f2f2"
                  sx={{
                    "&:hover": {
                      backgroundColor: "#ebebeb",
                      cursor: "pointer",
                    },
                    textAlign: "center",
                  }}
                >
                  {type}
                </Box>
              </div>
            ))}
        </Stack>
      </Popover>
    </>
  );
}
