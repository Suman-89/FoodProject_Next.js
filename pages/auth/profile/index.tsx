import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material";

export default function Profile() {

  // useEffect(() => {
  //   if (token) {
  //     Swal.fire(profileData?.message || "Welcome back!");
      
  //   }
  // }, []);

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Card elevation={4}>
          <CardContent>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Avatar
                    src="/avatar-placeholder.png"
                    sx={{ width: 100, height: 100, mb: 2 }}
                  />
                  <Button variant="contained" color="primary" size="small">
                    Message
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h5" gutterBottom>
                  {/* {profileData?.data?.name || "User Name"} */}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {/* {profileData?.data?.email || "user@example.com"} */}
                </Typography>
                <Box mt={2}>
                  <Typography variant="subtitle2">Register Type:</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Columbia University - New York
                  </Typography>
                </Box>

                <Grid container spacing={2} mt={2}>
                  <Grid item xs={4}>
                    <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
                      <Typography variant="h6">65</Typography>
                      <Typography variant="caption">Friends</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
                      <Typography variant="h6">43</Typography>
                      <Typography variant="caption">Photos</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
                      <Typography variant="h6">21</Typography>
                      <Typography variant="caption">Comments</Typography>
                    </Paper>
                  </Grid>
                </Grid>

                <Box mt={3}>
                  <Button
                    // component={Link}
                    href="/cms/list"
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    Go to List
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
