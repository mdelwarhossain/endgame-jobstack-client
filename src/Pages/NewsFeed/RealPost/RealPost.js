import React from "react";
import RealPostCard from "./RealPostCard";
import { useQuery } from "@tanstack/react-query";

const RealPost = () => {
  const { data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("http://localhost:5000/allposts").then((res) => res.json()),
  });
  return (
    <div>
      {/* //post 2  */}
      <div>
        {posts.map((post) => (
          <RealPostCard key={post._id} post={post}></RealPostCard>
        ))}
      </div>
    </div>
  );
};

export default RealPost;
