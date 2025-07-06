

async function Products({
  searchParams,
}: {
  searchParams: Promise<{ filteredBy?: string }>;
}) {
  const query = (await searchParams)?.filteredBy || "All";

  return (
    <>

    </>
  );
}

export default Products;
