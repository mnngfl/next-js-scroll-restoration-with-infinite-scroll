import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { usePost } from "@/util/api";
import { useRouter } from "next/router";
import Comments from "@/components/Comments";

export default function Post() {
  const router = useRouter();
  const { data, isLoading, error } = usePost(router.query.id);

  if (!router.query.id || isLoading)
    return (
      <Typography color="gray" level="body-md">
        Loading...
      </Typography>
    );
  if (error)
    return (
      <Typography color="danger" level="body-md">
        Error occured
      </Typography>
    );

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <>
      <IconButton onClick={() => handleBackButtonClick()}>
        <ArrowBackIcon />
      </IconButton>
      <Card sx={{ minWidth: 275, marginBottom: 4 }}>
        <CardContent>
          <Typography variant="h5">{data.title}</Typography>
          <Typography variant="body2">{data.body}</Typography>
          <Box>
            {data.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{ mr: 0.5, mt: 1 }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
      <Comments />
    </>
  );
}
