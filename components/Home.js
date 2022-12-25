import { Container, Banner, Content } from "./Home.styles";
import { db } from "../db-config/database";
import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let products = snapshot.docs.map((product) => ({
        id: product.id,
        data: product.data(),
      }));

      setProducts(products);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Banner></Banner>
      <Content>
        {products.map((prod) => (
          <Product key={prod.id} items={prod.data} id={prod.id} />
        ))}
      </Content>
    </Container>
  );
};

export default Home;