import React, { useEffect, useState } from "react";
import "./ProductPage.scss";
import { productsData } from "../../components/CommonFunctions/productData";
import { useParams } from "react-router-dom";
import { filterProducts } from "../../components/CommonFunctions/CommonFunction";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(filterProducts(productsData, id));
  }, [id]);
  return (
    <div>
      {product ? (
        <div className="product-page">
          <h1>{product.name}</h1>
          <img src={product.img} alt="not available" />
        </div>
      ) : (
        <h1>Error 404 Product Not found</h1>
      )}
    </div>
  );
}
