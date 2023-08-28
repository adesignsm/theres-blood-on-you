import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: "i41dre0t",
    dataset: 'production',
    useCdn: true
});

export default client;