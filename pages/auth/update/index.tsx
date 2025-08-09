import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { updatePasswordMutation } from "@/cusToomHooks/query/auth.query.hooks";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";


type UpdatePasswordForm = {
  password: string;
};


type UpdatePasswordPayload = {
  user_id: string;
  password: string;
};

// Validation schema
const schema = yup.object({
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters")
    .required("Password is required"),
});

export default function UpdatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [cookies] = useCookies(["token", "id"]);
  const { mutate, isLoading } = updatePasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: UpdatePasswordForm) => {
    if (!cookies.id) {
      toast.error("User ID not found. Please log in again.");
      return;
    }

    const payload: UpdatePasswordPayload = {
      user_id: cookies.id,
      password: data.password,
    };

    try {
      mutate(payload, {
        onSuccess: () => {
          toast.success("Password updated successfully!");
          // router.push("/auth/success");
        },
        onError: (error: any) => {
          toast.error(
            error?.response?.data?.message || "Failed to update password"
          );
        },
      });
    } catch (error) {
      console.error("Password update failed:", error);
      toast.error("Unexpected error occurred.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Update Password
        </Typography>
        <Typography variant="body1" textAlign="center" mb={2}>
          Enter your new password below.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          width="100%"
          noValidate
        >
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            margin="normal"
            variant="outlined"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={showPassword}
                onChange={() => setShowPassword((prev) => !prev)}
              />
            }
            label="Show Password"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Update Password"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
