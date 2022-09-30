import {
  Card,
  Grid,
  Box,
  Stack,
  Input,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import CustomInputLabel from "./CustomInputLabel";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const customBtnStyle = {
  padding: "8px",
  fontSize: "30px",
  fontWeight: "600",
  background: "#00474B",
  color: "#ffffff",
  "&:hover": { color: "#000000" },
};

const CustomInput = {
  padding: "2px 15px",
  fontSize: "25px",
  backgroundColor: "#F3F8FB",
  borderRadius: "8px",
  fontWeight: "800",
  dispaly: "flex",
  textAlignLast: "right",
  // caretColor:"#A3BFBD" ,
  input: { "&::placeholder": { color: "#A3BFBD" } },
  input: { textAlign: "right !important" },
  "&:before": { borderBottomColor: "transparent" },
  "&:after": { borderBottom: "5px solid #A3BFBD" },
  "&:before &:hover": { borderBottom: "5px solid #A3BFBD" },
};

function MainBox() {
  const [TipAmount, setTipAmount] = useState(0.0);
  const [Total, setTotal] = useState(0.0);
  var TakeBill = "",
    TakePerson = "";

  function CollectBills(b) {
    TakeBill = b.target.value;
  }
  function CountPerson(p) {
    TakePerson = p.target.value;
  }

  const Clickhandle = (a) => {
    if (a != 0) {
      let tip = (TakeBill * a) / TakePerson;
      tip = tip / 100;
      let Ts = TakeBill / TakePerson + tip;
      setTipAmount(tip.toFixed(2));
      setTotal(Ts.toFixed(2));
    } else {
      let a = prompt();
      let tip = (TakeBill * a) / TakePerson;
      tip = tip / 100;
      let Ts = TakeBill / TakePerson + tip;
      setTipAmount(tip.toFixed(2));
      setTotal(Ts.toFixed(2));
    }
  };

  const onReset = () => {
    setTotal("0.00");
    setTipAmount("0.0");
  };

  function InputBox() {
    const tipPercentage1 = [5, 10, 15];
    const tipPercentage2 = [25, 50, 0];

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          padding: { md: "10px 50px 10px 10px", xs: "10px 10px 10px 10px" },
        }}
      >
        <Stack gap={5}>
          <Box>
            <CustomInputLabel text={"Bill"} />
            <Input
              onChange={CollectBills}
              fullWidth
              required
              sx={CustomInput}
              placeholder={""}
              startAdornment={
                <InputAdornment sx={{ color: "#A3BFBD" }} position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              }
            />
          </Box>
          <Box>
            <CustomInputLabel text={"Select tip %"} />
            <Stack gap={2}>
              <Stack direction={"row"} gap={2}>
                {tipPercentage1.map((a) => {
                  return (
                    <React.Fragment key={a}>
                      <Button
                        onClick={() => {
                          Clickhandle(a);
                        }}
                        fullWidth
                        sx={customBtnStyle}
                      >
                        {a}%
                      </Button>
                    </React.Fragment>
                  );
                })}
              </Stack>
              <Stack direction={"row"} gap={2}>
                {tipPercentage2.map((a) => {
                  return (
                    <React.Fragment key={a}>
                      {a == 0 ? (
                        <Button
                          onClick={() => {
                            Clickhandle(a);
                          }}
                          sx={{ background: "#F3F7FA", fontWeight: "700" }}
                          fullWidth
                        >
                          Custom
                        </Button>
                      ) : (
                        <Button
                          onClick={() => {
                            Clickhandle(a);
                          }}
                          sx={customBtnStyle}
                          fullWidth
                        >
                          {a}%
                        </Button>
                      )}
                    </React.Fragment>
                  );
                })}
              </Stack>
            </Stack>
          </Box>
          <Box>
            {/* */}
            <CustomInputLabel text={"Number of People"} />
            <Input
              onChange={CountPerson}
              fullWidth
              sx={CustomInput}
              startAdornment={
                <InputAdornment sx={{ color: "#A3BFBD" }} position="start">
                  <PersonIcon />
                </InputAdornment>
              }
              required
            />
          </Box>
        </Stack>
      </Box>
    );
  }

  function OutputBox({ value, Type }) {
    return (
      <Box>
        <Box sx={{ display: "flex" }}>
          <Stack sx={{ flexGrow: "1" }}>
            <Typography sx={{ color: "#AACED2", fontWeight: "700" }}>
              {Type}
            </Typography>
            <Typography sx={{ color: "#387377" }}>/person</Typography>
          </Stack>
          <Typography
            sx={{ fontSize: "50px", fontWeight: "800", color: "#2FBEAB" }}
          >
            ${value}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: { sm: "30px", xs: "10px" },
        width: { sm: "80%", xs: "100%" },
        borderRadius: "10px",
        boxShadow: "0px 0px 100px 2px rgba(0,0,0,0.1)",
        background: "#ffffff",
      }}
    >
      <Box sx={{ padding: "10px", height: "100%" }}>
        <Grid container sx={{ width: "100%", height: "100%" }} spacing="5">
          <Grid item md={6} sm={12} xs={12}>
            <InputBox />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: { sm: "20px", md: "40px", xs: "30px" },
                background: "#00474B",
                borderRadius: "10px",
                height: "100%",
              }}
            >
              <Box sx={{ flexGrow: "1", marginTop: "20px" }}>
                <OutputBox
                  value={
                    TipAmount == 0 ||
                    TipAmount == Infinity ||
                    TipAmount == "NaN"
                      ? "0.00"
                      : TipAmount
                  }
                  Type={"Tip Amount"}
                />
                <OutputBox
                  value={
                    Total == 0 || Total == Infinity || Total == "NaN"
                      ? "0.00"
                      : Total
                  }
                  Type={"Total"}
                />
              </Box>
              <Button
                onClick={onReset}
                sx={{
                  background: "#0D686D",
                  color: "#00474B",
                  padding: "10px",
                  "&:hover": {
                    color: "#ffffff",
                    boxShadow: "0px 10px 100px rgba(0.0.0.0.5)",
                  },
                }}
              >
                Reset
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MainBox;
