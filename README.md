# Setting Up

To start a new app with Next.js, we will go for Create Next App. It’s also possible to set up manually a new app with Webpack. You are more than welcome to do so. That being said, open your command-line interface and run this command:
'''
npx create-next-app next-graphql-server
'''

As we said earlier, the `api` folder is where our API or server lives. Since we will be using GraphQL, we need a resolver and a schema to create a GraphQL server. The endpoint of the server will be accessible on the path `/api/graphql`, which is the entry point of the GraphQL server.
With this step forward, we can now create the GraphQL Schema for our server.

# Create GraphQL Schemas
Next, we need to install `apollo-server-micro` to use Apollo Server within Next.js.
'''
npm install apollo-server-micro
'''

# Create GraphQL Server
A GraphQL server exposes your data as a GraphQL API. It gives clients apps the power to ask for exactly the data they need and nothing more.
`In api/graphql.js`

'''
import  {  ApolloServer  }  from  "apollo-server-micro";
import  {  typeDefs  }  from  "./schemas";
import  {  resolvers  }  from  "./resolvers";

const  apolloServer  =  new  ApolloServer({  typeDefs,  resolvers  });

export  const  config  =  {
    api:  {
        bodyParser:  false
    }
};

export  default  apolloServer.createHandler({ path:  "/api/graphql"  });
'''
