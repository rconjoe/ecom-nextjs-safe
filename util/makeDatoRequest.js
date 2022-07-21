const { fetch } = require("node-fetch")
const token = process.env.DATO_FULL_ACCESS_TOKEN

export default async function makeDatoRequest(query){
    try{
        const response = await fetch("https://graphql.datocms.com/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: {
                query
            }
        });
        const data = await response.json();
        return data;
    }
    catch(err){
        console.error(err)
    }
}