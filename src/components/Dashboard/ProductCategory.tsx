import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductCategoryProps {
  title: string;
  products: Product[];
}

function ProductCategory({ title, products }: ProductCategoryProps) {
  return (
    <section className="product-category">
      <h3>{title}</h3>
      <div className="category-scroll">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductCategory;
