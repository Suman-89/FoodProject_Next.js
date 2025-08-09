import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { useCart } from "../../../context/cartContext";
import { deepOrange } from "@mui/material/colors";

const Header: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [cookies, , removeCookie] = useCookies(["token", "id"]);
  const { cartItems } = useCart();
  const router = useRouter();

  // Avatar menu state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleMenuClose(); // close menu first
    const result = await Swal.fire({
      title: "Confirm Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Confirm",
    });

    if (result.isConfirmed) {
      removeCookie("token", { path: "/" });
      removeCookie("id", { path: "/auth" });
      setTimeout(() => {
        router.push("/main");
      }, 800);
    }
  };

  const cartCount = cartItems.length;

  return (
    <>
      {/* Logo & Header Section */}
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{
              minHeight: "140px",
              px: 2,
            }}
          >
            {/* Logo */}
            <Grid container>
              <Grid item xs={12} md={6} {...({} as any)}>
                <Box sx={{ py: 3, display: "flex", alignItems: "center" }}>
                  <img
                    src="/assets/food/logo1.png"
                    alt="Food Recipes Logo"
                    style={{ height: "60px", marginRight: "1rem" }}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Header Image & Auth Button */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                minHeight: "140px",
                px: 2,
              }}
              {...({} as any)}
            >
              <img
                src="/assets/food/header_image.png"
                alt="Header Illustration"
                style={{ height: "100px", marginRight: "1rem" }}
              />

              {isClient && !cookies.token ? (
                <Button
                  startIcon={<LoginIcon />}
                  href="/auth/login"
                  variant="outlined"
                  sx={{
                    color: "green",
                    borderColor: "green",
                    "&:hover": {
                      borderColor: "darkgreen",
                      color: "darkgreen",
                    },
                  }}
                >
                  Login
                </Button>
              ) : (
                isClient && (
                  <>
                    <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
                      <Avatar sx={{ bgcolor: deepOrange[500] }}>U</Avatar>
                    </IconButton>

                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleMenuClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleMenuClose();
                          router.push("/auth/profile");
                        }}
                      >
                        My Profile
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleMenuClose();
                          router.push("/auth/update");
                        }}
                      >
                        Update Password
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </>
                )
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Navigation Bar */}
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}></Typography>

          <Box display="flex" alignItems="center" gap={2}>
            <Button color="inherit" href="/cms/list">
              Products
            </Button>

            <Button
              color="inherit"
              href="/cms/cart"
              startIcon={
                <Badge badgeContent={cartCount} color="error" max={9}>
                  <ShoppingCartIcon />
                </Badge>
              }
            >
              My Cart
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
