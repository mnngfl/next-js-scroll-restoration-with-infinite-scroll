import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function CommentItem({ comment }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemText primary={comment.user.username} secondary={comment.body} />
    </ListItem>
  );
}
