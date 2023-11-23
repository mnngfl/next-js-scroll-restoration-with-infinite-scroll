import { Divider, Typography, List } from "@mui/material";
import { useComments } from "@/util/api";
import { Fragment } from "react";
import CommentItem from "@/components/CommentItem";
import { useRouter } from "next/router";

export default function Comments() {
  const router = useRouter();

  const { data, isLoading, error } = useComments(router.query.id);

  if (isLoading)
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

  return (
    <List>
      <Typography variant="h6">Comments ({data.total || 0})</Typography>
      {data.comments.length > 0 ? (
        data.comments.map((comment, index) => {
          return (
            <Fragment key={comment.id}>
              <CommentItem comment={comment} />
              {index < data.total - 1 && <Divider />}
            </Fragment>
          );
        })
      ) : (
        <Typography color="gray" level="body-md">
          There are no comments.
        </Typography>
      )}
    </List>
  );
}
