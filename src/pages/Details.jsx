import React from "react";
import { redirect, useRouteLoaderData } from "react-router-dom";
import PostDetails from "../components/PostDetails";
import { POST_DETAIL_API } from "../service/constants";

const Details = () => {
  const post = useRouteLoaderData("post-detail");
  return (
    <>
      <PostDetails post={post} />
    </>
  );
};

export default Details;

export const loader = async ({ request, params }) => {
  const response = await fetch(POST_DETAIL_API(params.id));

  if (!response.ok) {
  } else {
    const data = await response.json();
    return data.post;
  }
};

export const action = async ({ request, params }) => {
  const response = await fetch(POST_DETAIL_API(params.id), {
    method: request.method,
  });
  if (!response.ok) {
    throw new Error("");
  }
  return redirect("/");
};
