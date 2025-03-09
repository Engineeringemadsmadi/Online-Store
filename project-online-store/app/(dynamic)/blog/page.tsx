import styles from './page.module.css'
import Image from "next/image"
import srcImage from "@/public/images/free-photo-of-traditional-yellow-lanterns-on-tree.png"
import Link from "next/link"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Hexashop - Blog",
    description: "discover a world of endless shoping possibilities at our online store.",
};

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
}

interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export const getData = async (): Promise<ProductsResponse> => {

    const res = await fetch('https://dummyjson.com/products')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
const Blog = async () => {
    const data = await getData()
    const products = data.products;
    console.log(products)
    return (
        <div className={`${styles.mainContainer} container \''77777--=77`}>
            {
                products.map((product: Product, index: number) => (
                    <Link href={`/blog/${product.id}`} className={styles.post} key={product.id}>
                        <div className={styles.imageContainer}>
                            <Image
                                className={styles.image}
                                src={product.thumbnail}
                                width={250}
                                height={200}
                                alt={product.title}
                            />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{product.title}</h3>
                            <p className={styles.text}>{product.price}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
export default Blog;