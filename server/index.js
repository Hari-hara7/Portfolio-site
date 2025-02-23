import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

const typeDefs = `
  type Blog {
    id: ID!
    title: String!
    slug: String!
    content: String!
    excerpt: String!
    publishedAt: String!
    updatedAt: String!
    status: Status!
  }

  enum Status {
    DRAFT
    PUBLISHED
    ARCHIVED
  }

  type Query {
    blogs: [Blog!]!
    blog(slug: String!): Blog
  }

  type Mutation {
    createBlog(title: String!, content: String!, excerpt: String!, status: Status!): Blog!
  }
`;

const resolvers = {
  Query: {
    blogs: async () => await prisma.blog.findMany(),
    blog: async (_, { slug }) => await prisma.blog.findUnique({ where: { slug } }),
  },
  Mutation: {
    createBlog: async (_, { title, content, excerpt, status }) => {
      const slug = title.toLowerCase().replace(/\s+/g, '-');
      return await prisma.blog.create({
        data: { title, slug, content, excerpt, status, publishedAt: new Date(), updatedAt: new Date() },
      });
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}/graphql`);
});
