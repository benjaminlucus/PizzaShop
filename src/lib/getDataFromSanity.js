import { client } from "./client"

export default async function getDataFromSanity() {
  const productsData = await client.fetch(`*[_type == "product"]{
      _id,
      name,
      price,
      description,
      "imageUrl": images[0].asset->url
    }`);
  const bannerData = await client.fetch(`*[_type == "banner"]{
      tagline,
      _id,
      headline,
      description,
      "imageUrl": image.asset->url
    }`);

  return { productsData, bannerData }
}
