import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4or46qv0r4601yw993v5tcq/master',
    cache: new InMemoryCache()
})