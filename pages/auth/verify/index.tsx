import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useUserVerifyMutation } from "@/cusToomHooks/query/auth.query.hooks";

export default function Verify() {
  const router = useRouter();
  const { mutate, isPending, isSuccess } = useUserVerifyMutation();
const userEmail = localStorage.getItem("email");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  // console.log(otp,'otp')
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value: string = e.target.value;

    if (!isNaN(Number(value)) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      const nextInput = inputsRef.current?.[index + 1];
      if (value && nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      console.log(e.key, "key");
      const nextInput = inputsRef.current[index - 1];
      nextInput?.focus();
    }
  };

  const handleSubmit = (data: string[]) => {
    console.log(data, "otp data");
    const newOtp = data.join("");
    const otpData = {
      email: userEmail,
      otp: newOtp,
    };

    Swal.fire({
      title: "Confirm ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          mutate(otpData);
          router.push("/auth/login");
        } catch (error:any) {
          Swal.fire("Please enter correct OTP,", error, "error");
        }
      }
    });
  };

  return (
    <>
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{ padding: 4, marginTop: 10, borderRadius: 3 }}
        >
          <Typography align="center" gutterBottom>
            {/* Enter the 4-digit code sent to <strong>{userEmail}</strong> */}
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Enter 4-digit OTP
          </Typography>

          <Box display="flex" justifyContent="center" gap={2} mb={3}>
            {otp.map((digit, index) => (
              <TextField
                key={index}
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: "center", fontSize: "1.5rem" },
                }}
                value={digit}
                onChange={(e) =>
                  handleChange(e as React.ChangeEvent<HTMLInputElement>, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(
                    e as React.KeyboardEvent<HTMLInputElement>,
                    index
                  )
                }
                inputRef={(el) => (inputsRef.current[index] = el)}
                sx={{ width: "3rem" }}
                variant="outlined"
              />
            ))}
          </Box>

          <Button
            onClick={() => handleSubmit(otp)}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mb: 2 }}
          >
            Submit
          </Button>

          <Typography variant="body2" align="center" color="text.secondary">
            Didn't receive the code?{" "}
            <Button
              size="small"
              variant="text"
              onClick={() => alert("Resend OTP")}
            >
              Resend
            </Button>
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
