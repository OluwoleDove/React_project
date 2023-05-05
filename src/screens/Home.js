import { useEffect, useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet-async";
import Product from "../components/Product";
import data from "../data";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: data.products, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Home() {
  const [{ loading, products, error }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    dispatch({ type: "FETCH_SUCCESS" });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Equest</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          "..."
        ) : error ? (
          "Loading error"
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>

        )}
      </div>
    </div>
  );
}

export default Home;
