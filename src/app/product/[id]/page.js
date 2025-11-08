import ProductPage from "@/components/ProductPage";
import { client } from "@/lib/client";

export default async function SingleProductPage(props) {
  const { id } = await props.params; // ✅ unwrap params

  const product = await client.fetch(`
    *[_type == "product" && _id == "${id}"][0]{
      _id,
      name,
      description,
      price,
      "images": images[]{
        "url": asset->url
      }
    }
  `);

  if (!product) {
    return <div className="text-center py-20">Product Not Found.</div>;
  }

  return <ProductPage product={product} />;
}
