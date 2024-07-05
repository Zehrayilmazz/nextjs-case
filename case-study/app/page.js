export default async function HomePage() {

  //API'den veri cekme
  const res = await fetch('https://fakestoreapi.com/products?limit=10');
  if (!res.ok) {
    throw new Error("Data couldn't be received");
  }
  const products = await res.json();

  //urun bilgileri
  return (
    <div>
      <h1>PRODUCTS</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} width="100" />
              <p>{product.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}






