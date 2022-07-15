import { buildClient } from "@datocms/cma-client-node";

const client = buildClient({
  apiToken: process.env.DATO_FULL_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  try {
    const records = await client.items.list({
      filter: {
        type: "product",
        slug: {
          eq: req.query.id,
        },
      },
    });
    res.json(records[0]);
  } catch (err) {
    console.log(err);
  }
}
