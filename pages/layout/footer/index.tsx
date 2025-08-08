import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        pt: 6,
        pb: 3,
        backgroundColor: "#68aa10",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              YourCompany
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Building modern solutions with a focus on performance and design.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/about" underline="hover" color="inherit">
                About Us
              </Link>
              <Link href="/contact" underline="hover" color="inherit">
                Contact
              </Link>
              <Link href="/faq" underline="hover" color="inherit">
                FAQ
              </Link>
              <Link href="/privacy" underline="hover" color="inherit">
                Privacy Policy
              </Link>
            </Stack>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Resources
            </Typography>
            <Stack spacing={1}>
              <Link href="/blog" underline="hover" color="inherit">
                Blog
              </Link>
              <Link href="/support" underline="hover" color="inherit">
                Support
              </Link>
              <Link href="/docs" underline="hover" color="inherit">
                Documentation
              </Link>
            </Stack>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Connect with us
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit" href="#" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="#" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="#" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
