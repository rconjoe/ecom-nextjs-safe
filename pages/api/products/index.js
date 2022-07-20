import { buildClient } from "@datocms/cma-client-node";

const client = buildClient({
  apiToken: process.env.DATO_FULL_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  try {
    const records = await client.items.list({
      filter: {
        type: "product",
      },
    });
    res.json(records);
    console.log(records);
  } catch (err) {
    console.log(err);
  }
}
