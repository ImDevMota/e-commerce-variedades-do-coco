import { createContext, useState, useEffect } from "react";
import { v4 } from "uuid";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return Array.isArray(JSON.parse(storedProducts))
      ? JSON.parse(storedProducts)
      : [];
  });

  const [cartCount, setCartCount] = useState(() => {
    const quantityProducts = localStorage.getItem("quantity");
    return quantityProducts ? JSON.parse(quantityProducts) : 0;
  });

  const [totalProducts, setTotalProducts] = useState(() => {
    const savedTotalProducts = localStorage.getItem("total-products");
    return savedTotalProducts ? JSON.parse(savedTotalProducts) : 0;
  });

  function onAddProduct(title, price) {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find(
        (product) => product.title === title
      );

      if (existingProduct) {
        //
        return prevProducts.map((product) =>
          product.title === title
            ? {
                ...product,
                quantity: product.quantity + 1,
                subtotal: calculateSubtotalProduct(product.quantity + 1, price),
              }
            : product
        );
      }

      const subtotal = calculateSubtotalProduct(1, price);

      return [
        ...prevProducts,
        { id: v4(), title, price, quantity: 1, subtotal: subtotal },
      ];
    });

    setCartCount((prevCount) => prevCount + 1);
  }

  function onDeleteProduct(productId) {
    setProducts((prevProducts) => {
      //
      const newProducts = prevProducts.filter(
        (product) => product.id !== productId
      );
      //
      const newCount = newProducts.reduce(
        (acc, product) => acc + product.quantity,
        0
      );

      setCartCount(newCount);
      return newProducts;
    });
  }

  function onIncreaseQuantityProduct(productId) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity + 1,
              subtotal: calculateSubtotalProduct(
                product.quantity + 1,
                product.price
              ),
            }
          : product
      )
    );

    setCartCount((prevCount) => prevCount + 1);
  }

  function onDecreaseQuantityProduct(productId) {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts
        .map((product) => {
          if (product.id === productId) {
            if (product.quantity - 1 < 1) {
              return null; // Removemos o item
            }
            return {
              ...product,
              quantity: product.quantity - 1,
              subtotal: calculateSubtotalProduct(
                product.quantity - 1,
                product.price
              ),
            };
          }
          return product;
        })
        .filter(Boolean); // Remove os `null`

      if (updatedProducts.length < prevProducts.length) {
        onDeleteProduct(productId); // Só chamamos a função se um item for removido
      }

      return updatedProducts;
    });

    setCartCount(cartCount - 1);
  }

  // function total

  function calculateSubtotalProduct(quantity, price) {
    const priceNumber = parseFloat(
      price.replace(/[^0-9,]/g, "").replace(",", ".")
    );

    const subtotal = priceNumber * quantity;

    return subtotal;
  }

  //
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("quantity", JSON.stringify(cartCount));

    setTotalProducts(() => {
      const savedTotalProducts = localStorage.getItem("total-products");

      if (savedTotalProducts) {
        let total = 0;
        products.forEach((product) => {
          total += product.subtotal;
        });

        if (total == JSON.parse(savedTotalProducts)) {
          return JSON.parse(savedTotalProducts);
        } else {
          return total;
        }
      } else {
        let total = 0;
        products.forEach((product) => {
          total += product.subtotal;
        });
        return total;
      }
    });

    localStorage.setItem("total-products", JSON.stringify(totalProducts));
  }, [products, cartCount, totalProducts]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        cartCount,
        onAddProduct,
        onDeleteProduct,
        onIncreaseQuantityProduct,
        onDecreaseQuantityProduct,
        totalProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
