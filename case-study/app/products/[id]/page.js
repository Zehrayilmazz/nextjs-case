export default async function ProductPage({ params }) {
  
  //params objesi ile id alma
  const { id } = params;

  //API'den veri cekme
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  //API istegi basarisiz olursa hata fırlatma
  if (!res.ok) {
    throw new Error("Data couldn't be received");
  }
  const product = await res.json();

  //urun bilgilerini render etme
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
