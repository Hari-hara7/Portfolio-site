import { gql } from '@apollo/client';

export const CREATE_BLOG = gql`
  mutation CreateBlog($title: String!, $content: String!, $excerpt: String!, $status: Status!) {
    createBlog(title: $title, content: $content, excerpt: $excerpt, status: $status) {
      id
      title
      slug
      status
    }
  }
`;
