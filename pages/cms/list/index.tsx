import * as React from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  Stack,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  // Link,
} from "@mui/material";
import { DataGrid } from "../../../node_modules/@mui/x-data-grid/esm/DataGrid/DataGrid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

import Link from "next/link";
import {
  listQuery,
  useDeleteProduct,
} from "@/cusToomHooks/query/cms.query.hooks";
import PrimarySearchAppBar from "./searchBar";
// import Link from "next/link";

export default function List() {
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [productToDelete, setProductToDelete] = React.useState<string | null>(
    null
  );
  const [cookies, setCookie, removeCookie] = useCookies(["token", "id"]);

  const [searchedData, setSearchedData] = React.useState("");
  const { data, isError, refetch } = listQuery();
  const { mutate: deleteMutation } = useDeleteProduct();

  const handleDelete = (id: string) => {
    setProductToDelete(id);
    setOpenDeleteModal(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      deleteMutation(productToDelete, {
        onSuccess: () => {
          toast.success("Product deleted successfully");
          setOpenDeleteModal(false);
          refetch();
        },
      });
    }
  };
// React.useEffect(()=>{
//   window.location.reload();
// },[cookies.token])
  // console.log(searchedData,'searchedData')

  const columns = [
    { field: "index", headerName: "Sl. No.", width: 80 },
    { field: "name", headerName: "Product name", width: 160 },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      valueFormatter: (params: any) => `₹${params}`,
    },
    { field: "description", headerName: "Description", width: 250 },
    { field: "category", headerName: "Category", width: 140 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            color="info"
            size="small"
            startIcon={<EditIcon />}
            component={Link}
            href={`/cms/update/${params.row._id}`}
            underline="none"
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </Button>
        </Stack>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  const rows = (data?.data.product || [])
    .filter((item) =>
      [item.name, item.category, item.description].some((field) =>
        field?.toLowerCase().includes(searchedData.toLowerCase())
      )
    )
    .map((item, index) => ({
      id: item._id,
      index: index + 1,
      ...item,
    }));

  return (
    <>
      {/* Search bar start */}
      <PrimarySearchAppBar onSearch={setSearchedData} />
      {/* Search bar end */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, background: "grey" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h5" fontWeight={600}>
              Product List
            </Typography>

            <Button
              variant="contained"
              color="primary"
              href="/cms/create"
              startIcon={<AddIcon />}
            >
              Add Product
            </Button>
          </Box>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{
              border: "none",
              backgroundColor: "#fff",
              borderRadius: 2,
            }}
          />
        </Paper>
      </Container>

      <Dialog open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this product?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteModal(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
