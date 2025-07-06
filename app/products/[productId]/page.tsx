

async function SingleProductDetails({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string[] }>;
  searchParams: Promise<{ image_index?: string }>;
}) {
  const { productId } = await params;
  const { image_index } = await searchParams;
  const breadcrumbs = [
    { link: "/products", name: "Product" },
    { link: `/products/${productId}`, name: "Product description" },
  ];

  return (
    <>
      
    </>
  );
}

export default SingleProductDetails;
