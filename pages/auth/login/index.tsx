import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Cookies, useCookies } from "react-cookie";
import { useRouter } from "next/router";

// MUI imports
import {
  TextField,
  Button,
  Typography,
  Box,
  Stack,
  Divider,
  CssBaseline,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import { useUserSignInMutation } from "@/cusToomHooks/query/auth.query.hooks";

// Your custom mutation hook

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "100vh",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
  },
}));

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(3, "Min 3 characters")
    .required("Password is required"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { mutate, isPending } = useUserSignInMutation();
  const cookie = new Cookies();
  const router = useRouter();

  const onSubmit = async (data: { email: string; password: string }) => {
    const { email, password } = data as {
      email: String;
      password: String;
    };
    const newData = {
      email: data.email,
      password: data.password,
    };
    // console.log(newData,'data');
    const result = await Swal.fire({
      title: "Confirm Login?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Confirm",
    });

    if (result.isConfirmed) {
      mutate(newData, {
        onSuccess: (response) => {
          const { token, status, message, user } = response || {};
          console.log(response, "res");
          if (status === true) {
            cookie.set("id", user.id);
            cookie.set("token", token, {
              path: "/",
              sameSite: "lax",
              secure: true,
              maxAge: 60 * 60 * 24 * 7,
            });
            // path is mandatory to show the token in cookie in every page.

            Swal.fire("Success", message || "Login successful", "success").then(
              () => {
                router.push("/cms/list");
              }
            );
          } else {
            Swal.fire("Error", message || "Login failed", "error");
          }
        },
        onError: (error) => {
          Swal.fire("Error", error?.message || "Login failed", "error");
        },
      });
    }
  };

  return (
    <>
      <CssBaseline />
      <SignInContainer direction="column" justifyContent="center">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Sign In
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              label="Email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              margin="normal"
              variant="filled"
              InputLabelProps={{ style: { color: "#bbb" } }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              margin="normal"
              variant="filled"
              InputLabelProps={{ style: { color: "#bbb" } }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
              disabled={isSubmitting || isPending}
            >
              {isPending ? "Logging in..." : "Login"}
            </Button>
          </Box>

          <Divider>or</Divider>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="body2">
              Don&apos;t have an account?{" "}
              <Link href="register" underline="hover">
                Sign up
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}
