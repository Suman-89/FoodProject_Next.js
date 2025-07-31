import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { toast } from "react-toastify";
import { useProductCreateMutation } from "@/cusToomHooks/query/cms.query.hooks";

// Schema
const schema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  price: yup.number().required("Price is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
});

export default function Create() {

  const {mutate, isPending} = useProductCreateMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      price: "",
      description: "",
      category: "",
    },
  });

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      price: data.price,
      description: data.description,
      category: data.category,
    };
   mutate(formData);
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: "linear-gradient(to bottom, #673ab7, #2196f3)",
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: 400,
          backgroundColor: "#1a237e",
          borderRadius: 3,
          color: "white",
          boxShadow: 10,
        }}
      >
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Add new Product
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} mt={2}>
            <TextField
              fullWidth
              label="Product Name"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              margin="normal"
              variant="filled"
              InputProps={{
                style: { backgroundColor: "white", borderRadius: 5 },
              }}
            />

            <TextField
              fullWidth
              label="Price"
              {...register("price")}
              error={!!errors.price}
              helperText={errors.price?.message}
              margin="normal"
              variant="filled"
              InputProps={{
                style: { backgroundColor: "white", borderRadius: 5 },
              }}
            />

            <TextField
              fullWidth
              label="Description"
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
              margin="normal"
              variant="filled"
              InputProps={{
                style: { backgroundColor: "white", borderRadius: 5 },
              }}
            />

            <TextField
              fullWidth
              label="Category"
              {...register("category")}
              error={!!errors.category}
              helperText={errors.category?.message}
              margin="normal"
              variant="filled"
              InputProps={{
                style: { backgroundColor: "white", borderRadius: 5 },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                backgroundColor: "#4caf50",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#43a047",
                },
              }}
              disabled={isSubmitting}
            >
              Register
            </Button>
          </Box>
          <Typography variant="body2" align="center" mt={2}>
           
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
