import "reflect-metadata";
import path from "node:path"

import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql";
import { XMLProcessingResolver } from "./resolvers/XMLProcessingResolver";

async function bootstrap () {
    const schema = await buildSchema({
        resolvers: [
            XMLProcessingResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'    )
    });

    const server = new ApolloServer({
        schema,
    });

    const { url } = await server.listen();

    console.log(`🚀 Server is running on ${ url }`);
}

bootstrap ()