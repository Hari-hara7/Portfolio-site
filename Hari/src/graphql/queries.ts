import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
  query {
    blogs {
      id
      title
      slug
      excerpt
      publishedAt
      status
    }
  }
`;

export const GET_BLOG = gql`
  query GetBlog($slug: String!) {
    blog(slug: $slug) {
      id
      title
      content
      publishedAt
      status
    }
  }
`;
