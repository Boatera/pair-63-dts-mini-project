import { Box, CardMedia, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/detail/${movie.title}`}>
      <Card
        id={movie.mal_id}
        sx={{ display: "flex", width: 400, marginRight: 2, my: 3, maxHeight: 225 }}
      >
        <CardMedia
          component="img"
          sx={{ width: 150, height: 225 }}
          image={`${movie.images.jpg.image_url}`}
          alt="Movie poster"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="p">
              {movie.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {new Date(movie.aired.from).getFullYear()}
            </Typography>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="read-only"
                precision={0.1}
                value={movie.score / 2}
                max={5}
                readOnly
              />
              <Box sx={{ ml: 2 }}>{movie.score}</Box>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default MovieCard;
