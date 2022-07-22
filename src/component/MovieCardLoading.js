import { Skeleton } from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";

const MovieCardLoading = () => {
  return (
    <Card sx={{ display: "flex", width: 400, marginRight: 2, my: 3 }}>
      <Skeleton
        sx={{ bgcolor: "whitesmoke" }}
        animation="wave"
        variant="rectangular"
        width={400}
        height={225}
      />
    </Card>
  );
};

export default MovieCardLoading;
