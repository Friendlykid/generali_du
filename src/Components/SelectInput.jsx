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
        <Stack direction="row" gap="0" width="100%" height="25px" sx={{cursor:"pointer"}}>
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
                  <polygon points="6,5 18,5 12,17" style={{fill:"none",stroke:"black",strokeWidth:2}} />
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
