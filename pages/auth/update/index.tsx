import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  //   Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

// import { useTokenStore } from "../../../zustand/store";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters")
    .required("Password is required"),
});

export default function UpdatePassword() {
// const [cookies] = useCookies(["id"])
// const userId = localStorage.getItem('user_id');
// const user_id = cookies.id;
// console.log(user_id,'id');
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data) => {
  // //  dispatch(login(data))
  // const newData = {
  //   user_id : userId,
  //   password : data.password
  // }
  // // console.log(data)
  // };

  return (
    <>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Typography variant="h4" gutterBottom>
            Update password
          </Typography>
          <Typography variant="body1" textAlign="center" mb={2}>
            Update your password.
          </Typography>
          <Box component="form" 
          // onSubmit={handleSubmit(onSubmit)} 
          width="100%">
            <TextField
              fullWidth
              label="Password"
              {...register("password")}
              //   type={passwordType}
              error={!!errors.password}
              helperText={errors.password?.message}
              margin="normal"
              variant="outlined"
            />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={1}
            >
              <FormControlLabel
                control={
                  <Checkbox
                  //   onClick={() =>
                  //     setPasswordType((prev) =>
                  //       prev === "password" ? "text" : "password"
                  //     )
                  //   }
                  />
                }
                label="Show Password"
              />
              <Typography variant="body2">
                {/* <Link to="/auth/register">Go to register</Link> */}
              </Typography>
            </Box>

            {isSubmitting ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                disabled={isSubmitting}
              >
                Loading...
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                disabled={isSubmitting}
              >
                Update password
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
