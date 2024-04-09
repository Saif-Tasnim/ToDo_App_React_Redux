import React, { useState } from "react";
import { useGetPostsQuery, useGetSinglePostQuery } from "../redux/features/api/baseApi";

const DataFetching = () => {
  const [diff, setDiff] = useState(null);
  const { data: posts, isLoading: isAll } = useGetPostsQuery();
  const {data, isLoading: isSingle} = useGetSinglePostQuery(3);

  if (isAll || isSingle) {
    return "loading";
  }

  return (
    <div>
      <h1 className="text-center text-3xl my-8 underline">Data Fetching </h1>

      {/* <div className="my-10 mx-10">
        {posts?.map((post) => (
          <div
            key={post.id}
            className={`border border-slate-400 p-4 my-4 rounded cursor-pointer ${
              diff === post.id ? "bg-red-600" : ""
            }`}
            onClick={() => setDiff(post.id)}
          >
            <h1> {post.title} </h1>
            <p> {post.body} </p>
          </div>
        ))}
      </div> */}

      <div
            key={data.id}
            className={`border border-slate-400 p-4 my-4 rounded cursor-pointer`}>
            <h1> {data.title} </h1>
            <p> {data.body} </p>
          </div>
    </div>
  );
};

export default DataFetching;
