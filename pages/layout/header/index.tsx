// components/Navbar.js
import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
// import { Cookies } from "react-cookie";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { Box, Container, Grid, useTheme } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token", "id"]);

  useEffect(() => {
    if (cookies.token) {

    setIsClient(true);
    }
  }, []);

  const router = useRouter();
  const handleClick = async () => {
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
        // window.location.reload();
      }, 800);
    }
  };

  // if (!isClient || !cookies.token) return null;

  return (
    <>
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
              //  position: 'relative',
              display: "flex",
              // justifyContent: 'flex-end',
              alignItems: "center",
              backgroundImage: `url('/assets/food/header_image.png')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              // backgroundPosition: 'right center',
              minHeight: "140px",
              px: 2,
            }}       variant="outlined"
           
          >
            {/* Logo & Subtitle */}
            <Grid item xs={12} md={6}>
              <Box sx={{ py: 3 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'Georgia', serif",
                    fontWeight: 600,
                    color: "#4A4A4A",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "green",
                      fontSize: "2rem",
                      mr: 1,
                      backgroundImage: `url('/assets/food/logo1.png')`,
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <img src="/assets/food/logo1.png" alt="" />
                  </Box>
                  {/* Food Recipes */}
                </Typography>
                {/* <Typography
                variant="subtitle1"
                sx={{ fontFamily: "'Georgia', serif", color: '#777' }}
              >
                A Premium WordPress Theme
              </Typography> */}
              </Box>
            </Grid>

            {/* Right side - Background + Login Button */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                minHeight: "140px",
                px: 2,
              }}
            >
              {!isClient ? 
                <Button
                  startIcon={<LoginIcon />}
                  sx={{
                    color: "green",
                    borderColor: "green",
                    "&:hover": {
                      borderColor: "darkgreen",
                      color: "darkgreen",
                    },
                  }}
                  href="/auth/login"
                >
                  Login
                </Button>
              :
                <Button
                  startIcon={<LoginIcon />}
                  sx={{
                    color: "green",
                    borderColor: "green",
                    "&:hover": {
                      borderColor: "darkgreen",
                      color: "darkgreen",
                    },
                  }}
                  href="/auth/login"
                >
                  Logout
                </Button>
              }
            </Grid>
          </Grid>
        </Container>
      </Box>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">Product App</Typography>
          <div>
            <Button color="inherit" href="/auth/profile">
              My Profile
            </Button>

            <Button color="inherit" href="/cms/list">
              CMS List
            </Button>
            <Button color="inherit" onClick={handleClick}>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
