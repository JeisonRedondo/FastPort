interface ProductCardProps {
  name: string;
  image: string;
  price: number;
}

function ProductCard({ name, image, price }: ProductCardProps) {
  return (
    <section className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{price}</p>
    </section>
  );
}

export default ProductCard;
