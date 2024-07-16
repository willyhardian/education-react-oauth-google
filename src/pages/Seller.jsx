import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../store/product-context";
import { ThemeContext } from "../store/theme-context";
export default function Seller() {
    // const [products, setProducts] = useState();
    // useEffect(() => {
    //     async function fetchProducts() {
    //         const response = await axios.get(
    //             import.meta.env.VITE_BASE_URL + "/products?category=2",
    //             {
    //                 headers: {
    //                     Authorization:
    //                         "Bearer " + localStorage.getItem("access_token"),
    //                 },
    //             }
    //         );
    //         const products = response.data.rows;
    //         setProducts(products);
    //     }
    //     fetchProducts();
    // }, []);

    const { products, setProducts, fetchProducts } = useContext(ProductContext);
    const { theme, setTheme } = useContext(ThemeContext);
    console.log(JSON.stringify(theme), "< theme value");
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Seller Page
                        </h2>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products &&
                                products.map((product, idx) => (
                                    <ProductCard key={idx} product={product} />
                                ))}
                            {products &&
                                products.map((product, idx) => (
                                    <ProductCard key={idx} product={product} />
                                ))}
                            {products &&
                                products.map((product, idx) => (
                                    <ProductCard key={idx} product={product} />
                                ))}
                            {products &&
                                products.map((product, idx) => (
                                    <ProductCard key={idx} product={product} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
