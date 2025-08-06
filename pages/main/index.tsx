import React from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Slider from "react-slick";

type Recipe = {
  id: number;
  image: string;
  title: string;
  description: string;
  rating: number;
};
type hotList = {
  id: number;
  item: string;
  image: string;
};
const mockTopRecipes: Recipe[] = [
  {
    id: 1,
    image: "assets/food/carousel3.jpg",
    title: "Pimento Cheese Potato Skins",
    description: "If there’s anything better than the perfect baked potato...",
    rating: 4.3,
  },
  {
    id: 2,
    image: "assets/food/carousel1.jpg",

    title: "Goat Cheese and Chorizo Rolls",
    description: "You know how bacon is...",
    rating: 4.5,
  },
  {
    id: 3,
    image: "assets/food/carousel2.jpg",

    title: "Vietnamese Style Grilled Chicken",
    description: "This 5-spice chicken packs a punch...",
    rating: 4.7,
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,           // ✅ Enable autoplay
  autoplaySpeed: 3000,  
};

const categories = [
  "Cheese",
  "Chicken",
  "Chocolate",
  "Pizza",
  "Potatoes",
  "Rolls",
];

const hotList: hotList[] = [
  {
    id: 1,
    item: "Chocolate Earl Grey Pots",
    image: "assets/food/ChoclateEarl.jpg",
  },
  {
    id: 2,
    item: "Pesto Pizza",
    image: "assets/food/car4.jpg",
  },
  {
    id: 3,
    item: "Chorizo Rolls",
    image: "assets/food/carousel1.jpg",
  },
  {
    id: 4,
    item: "Grilled Chicken",
    image: "assets/food/carousel3.jpg",
  },
];

const HomePage: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [searchText, setSearchText] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);

  const handleSearch = () => {
    console.log("Searching for:", searchText, "in category:", category);
    // Add API call logic here
  };

  return (
    <Box>
      {/* Navbar */}
      {/* <AppBar position="static" color='primary'>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Food Recipes
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {['Home', 'Submit Recipe', 'Blog', 'About', 'Contact'].map((item) => (
              <MenuItem key={item} onClick={handleMenuClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar> */}

      {/* Search Section */}
      <Container sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Search Recipes
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              label="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                native
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option aria-label="None" value="" />
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button fullWidth variant="contained" onClick={handleSearch}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Top Recipes Section */}
      <Container
        sx={{
          my: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontFamily: "Pacifico" }}>
          Top Recipes of the Day
        </Typography>
        <Grid item xs={12} md={3}>
          <Box sx={{ maxWidth: 800, margin: "0 auto 0", height: 600 }}>
            <Slider {...settings}>
              {mockTopRecipes.map((item, i) => (
                <Card
                  key={item.id}
                  sx={{
                    mx: 0,
                    p: 0,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>{item.description}</Typography>
                    <Typography variant="body1">⭐ {item.rating}</Typography>
                    <Button size="small" sx={{ mt: 1 }} variant="outlined">
                      View Recipe
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </Box>
        </Grid>
      </Container>

      {/* What's Hot Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h5" gutterBottom>
          What’s Hot
        </Typography>
        <Grid container spacing={2}>
          {hotList.map((item, i) => (
            <Grid item xs={12} md={6} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="80"
                  image={item.image}
                  alt=""
                />
                <CardContent>
                  <Typography variant="subtitle1">{item.item}</Typography>
                  <Typography variant="body2">🔥 Trending now</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Weekly Special */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h5" gutterBottom>
          Weekly Special
        </Typography>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image="assets/food/carousel1.jpg"
            alt=""
          />
          <CardContent>
            <Typography variant="h6">Pimento Cheese Potato Skins</Typography>
            <Typography variant="body2">
              These are the perfect comfort food! Crispy on the outside, cheesy
              on the inside.
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              View Special
            </Button>
          </CardContent>
        </Card>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "grey.900",
          color: "white",
          py: 3,
          textAlign: "center",
          mt: 6,
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Food Recipes – A React + MUI Project
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
