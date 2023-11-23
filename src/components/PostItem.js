import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

export default function PostItem({ post }) {
  const router = useRouter();

  const handleClickItem = (id) => {
    router.push({
      pathname: "/posts/[id]",
      query: { id: id },
    });
  };

  return (
    <Card sx={{ minWidth: 275, marginBottom: 4 }}>
      <CardActionArea onClick={() => handleClickItem(post.id)}>
        <CardContent>
          <Typography variant="h5">{post.title}</Typography>
          <Typography variant="body2" className="card-body">
            {post.body}
          </Typography>
          <Box>
            {post.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{ mr: 0.5, mt: 1 }}
              />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
