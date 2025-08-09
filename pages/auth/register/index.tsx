import React from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import image1 from "../../../public/assets/image1.png";
import image2 from "../../../public/assets/image2.png";
import { useUserSignUpMutation } from "@/cusToomHooks/query/auth.query.hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { registerProps } from "@/typescript/auth.interface";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters")
    .required("Password is required"),
});

const Register: React.FC = () => {
  const router = useRouter();
  const { mutate } = useUserSignUpMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerProps>({
    resolver: yupResolver(schema) as Resolver<registerProps>,
  });

type FormDataType = {
  name: string;
  email: string;
  password: string;
};

const onSubmit = (formData: FormDataType) => {
  const { name, email, password } = formData;

  // Prepare payload
  const payload: FormDataType = { name, email, password };

  console.log(payload);

  // API mutation
  mutate(payload);

  // Save email locally before redirect
  localStorage.setItem("email", email);

  // Navigate to verify page
  router.push("/auth/verify");
};

//userouter hooks
  return (
    <Box
      className="wrapper"
      sx={{
        backgroundColor: "#f7f7f7",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        textTransform: "uppercase",
        fontSize: "25px",
        fontFamily: "Muli-SemiBold",
        color: "#333",
        letterSpacing: "3",
        textAlign: "center",
        marginBottom: "33px",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 400,
          width: "100%",

          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box className="inner" sx={{ position: "relative" }}>
          {/* Top image */}
          <Box
            component="img"
            src={image1}
            alt="Image 1"
            sx={{
              width: 150,
              position: "absolute",
              top: -40,
              left: -40,
              display: { xs: "none", md: "block" },
            }}
          />

          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box
                component="form"
                action="#"
                sx={{ px: 5, py: 6, background: "#fff" }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Typography variant="h5" gutterBottom>
                  New Account?
                </Typography>

                <TextField
                  fullWidth
                  label="Name"
                  placeholder="Name"
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Email"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  placeholder="Password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, py: 1.5 }}
                >
                  Register
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom image */}
          <Box
            component="img"
            src={image2}
            alt=""
            sx={{
              width: 100,
              position: "absolute",
              bottom: -30,
              right: 20,
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
