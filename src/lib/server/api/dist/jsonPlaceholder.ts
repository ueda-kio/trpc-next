import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const posts = z.array(
  z
    .object({
      id: z.number(),
      title: z.string(),
      body: z.string(),
      userId: z.number(),
    })
    .partial()
    .passthrough()
);
const post = z
  .object({
    id: z.number(),
    title: z.string(),
    body: z.string(),
    userId: z.number(),
  })
  .partial()
  .passthrough();

export const schemas = {
  posts,
  post,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/posts",
    alias: "getPosts",
    requestFormat: "json",
    response: z.array(
      z
        .object({
          id: z.number(),
          title: z.string(),
          body: z.string(),
          userId: z.number(),
        })
        .partial()
        .passthrough()
    ),
  },
  {
    method: "post",
    path: "/posts",
    alias: "postPosts",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: post,
      },
    ],
    response: post,
  },
  {
    method: "get",
    path: "/posts/:id",
    alias: "getPostsId",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: post,
    errors: [
      {
        status: 404,
        description: `Post not found`,
        schema: z.object({}).partial().passthrough(),
      },
    ],
  },
  {
    method: "put",
    path: "/posts/:id",
    alias: "putPostsId",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: post,
      },
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: post,
    errors: [
      {
        status: 404,
        description: `Post not found`,
        schema: z.object({}).partial().passthrough(),
      },
    ],
  },
  {
    method: "delete",
    path: "/posts/:id",
    alias: "deletePostsId",
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: z.object({}).partial().passthrough(),
    errors: [
      {
        status: 404,
        description: `Post not found`,
        schema: z.object({}).partial().passthrough(),
      },
    ],
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
