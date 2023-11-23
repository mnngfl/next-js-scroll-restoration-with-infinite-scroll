import PostItem from "@/components/PostItem";
import { usePosts } from "@/util/api";
import { useMemo } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const PAGE_SIZE = 10;

export default function Home() {
  const { data, isLoading, size, setSize } = usePosts(PAGE_SIZE);
  const { posts, total } = useMemo(() => {
    if (data?.[0]?.posts) {
      return {
        posts: [...data.flatMap((page) => page.posts)],
        total: data[0].total,
      };
    }
    return {
      posts: [],
      total: 0,
    };
  }, [data]);
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd = size * PAGE_SIZE >= total;

  return (
    <>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
      {!isReachingEnd && (
        <Box sx={{ textAlign: "center" }}>
          <Button
            disabled={isLoadingMore}
            variant="contained"
            onClick={() => setSize(size + 1)}
          >
            {isLoadingMore ? "Loading..." : "Load more"}
          </Button>
        </Box>
      )}
    </>
  );
}
