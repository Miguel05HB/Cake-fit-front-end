import Featured from '@/components/Featured';
import Header from '@/components/Header';
import NewProducts from '@/components/NewProducts';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default function HomePage({ featureProduct, newProducts }) {
  console.log(newProducts);
  return (
    <div>
      <Header />
      <Featured product={featureProduct} />
      <NewProducts products={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '647cae2a46a3d66e28c98a70';
  await mongooseConnect();
  const featureProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  return {
    props: {
      featureProduct: JSON.parse(JSON.stringify(featureProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
