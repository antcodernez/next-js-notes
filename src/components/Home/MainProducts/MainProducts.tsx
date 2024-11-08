import Image from "next/image";
import styles from "./MainProducts.module.sass";
import { Product } from "app/interfaces/Products.interface";

const getProducts = async () => {
   try {
    const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-10/products.json`, {
        headers: new Headers ({
            "X-Shopify-Access-Token": `${process.env.SHOPIFY_API_KEY}`
        })
    } );

    const data = await response.json();
    const { products } = data;
    
    return products;
   
   } catch (error) {
        console.log(error);
   }
} 

export const MainProducts = async ()  => {
    
    const products = await getProducts() ?? [];
    
    return (
        <article className={styles.MainProducts}>
            <h3>Mucho vicio malo 💀</h3>
                <div className={styles.MainProducts__grid}>
                    {products?.map((product: Product) => {
                        const imageSrc = product?.images[0].src;
                        return (
                            <article key={product.id}>
                                <p>{product.title}</p>
                                <Image src={imageSrc} fill alt={product.title}
                                loading="eager"
                                />
                            </article>
                        )
                    })}
                </div>
        </article>
    )
}