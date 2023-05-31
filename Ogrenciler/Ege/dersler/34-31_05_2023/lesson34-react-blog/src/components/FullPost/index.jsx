import PropTypes from "prop-types";

import PostText from "./PostText";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./style.css";
import Grid from "@mui/material/Grid";

const FullPost = ({ post }) => {
  return (
    <div>
      <Card className="card">
        <Grid container>
          <Grid xs={4}>
            <CardMedia
              sx={{ height: 250  }}
              image={`https://picsum.photos/id/${post.id}/200/300`}
              title="green iguana"
            >
              {/* <PostImage imageUrl= /> */}
            </CardMedia>
          </Grid>
          <Grid xs={8}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <PostText text={post.body} title={post.title} />
              </Typography>
            </CardContent>
            <CardActions className="cardActions">
              <Button className="caButtons" size="small">
                Share
              </Button>
              <Button className="caButtons" size="small">
                Learn More
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default FullPost;

FullPost.propTypes = {
  post: PropTypes.object,
};
