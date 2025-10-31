import { defineOneEntry } from "oneentry";
import HomeClient from "./page2"; // <-- import client component

export default async function HomePage() {
  const { Pages } = defineOneEntry(
    "https://pizzaperfection.oneentry.cloud",
    {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGl6emFwZXJmZWN0aW9uIiwic2VyaWFsTnVtYmVyIjoxLCJpYXQiOjE3NjE2MjIxNDMsImV4cCI6MTc5MzE1ODEyNX0.L0VmQ4VL-7o__oyRifkluPu-vonWalb1yJTmo7HhDsU',
    }
  );

  const response = await Pages.getPageByUrl("home", "en_US");
console.log("OneEntry Response:", response);
  const data = {
    nameisrequired: response.attributeValues.nameisrequired.value[0].plainValue,
    title: response.attributeValues.title.value[0].htmlValue,
    description: response.attributeValues.description.value[0].htmlValue,
    price: response.attributeValues.price.value[0],
  };

  return <HomeClient data={data} />;
}
