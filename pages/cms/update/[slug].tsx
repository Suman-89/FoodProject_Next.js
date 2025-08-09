import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useUpdateItem } from "@/cusToomHooks/query/cms.query.hooks";
import { getSignleProduct } from "@/api/function/cms.api";

// Define form types
type ProductForm = {
  name: string;
  price: string;
  description: string;
  category: string;
};

// Validation schema
const schema = yup.object({
  name: yup.string().required("Product name is required"),
  price: yup.string().required("Price is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
});

export default function Update() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const slug = router.query.slug as string | undefined;

  const { mutate, isSuccess, isPending } = useUpdateItem();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ProductForm>({
    resolver: yupResolver(schema),
  });

  const { data, isLoading } = useQuery({
    queryKey: ["singleItem", slug],
    queryFn: () => getSignleProduct(slug as string),
    enabled: !!slug,
  });
console.log(data,'data')
  useEffect(() => {
    if (data) {
      reset({
        name: data.product.name || "",
        price: data.product.price || "",
        description: data.product.description || "",
        category: data.product.category || "",
      });
    }
  }, [data, reset]);

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({ queryKey: ["singleItem"] });
      router.push("/cms/list");
    }
  }, [isSuccess, queryClient, router]);

  const onSubmit = (formData: ProductForm) => {
    if (!slug) return;
    mutate({ updatedData: formData, slug });
  };

  if (isLoading) {
    return (
      <Container maxWidth="sm" sx={{ py: 5 }}>
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Card elevation={4} sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Update Product
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <TextField
                label="Product Name"
                fullWidth
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                label="Price (₹)"
                fullWidth
                {...register("price")}
                error={!!errors.price}
                helperText={errors.price?.message}
              />
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={3}
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
              <TextField
                label="Category"
                fullWidth
                {...register("category")}
                error={!!errors.category}
                helperText={errors.category?.message}
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                disabled={isSubmitting || isPending}
                sx={{ py: 1.2 }}
              >
                {isPending ? "Updating..." : "Update Product"}
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
