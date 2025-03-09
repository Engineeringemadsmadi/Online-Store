import styles from './page.module.css'
import Image from 'next/image'
import srcImage from "@/public/images/free-photo-of-traditional-yellow-lanterns-on-tree.png"

type Params = {
    params: string,
}
type Id = {
    id: number,
}
interface Product {
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

export const getData = async (id: Id): Promise<ProductsResponse> => {

    const res = await fetch(`https://dummyjson.com/products/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
const Post = async ({ params }: Params) => {


    const product: ProductsResponse = await getData(params.id)

    return (
        <div className={styles.container_g}>
            <header className={styles.header}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.desc}>{product.description}</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={product.thumbnail}
                        alt={product.title}
                        fill={false}
                    />
                    <span className={styles.author}>{product.category}</span>
                </div>
            </header>
            <div className={styles.content}>
                <p className={styles.gallery}>
                    {product.images.map(image =>
                        <Image
                            key={product.id}
                            src={image}
                            alt={product.title}
                            width={140}
                            height={140}
                        />
                    )}
                </p>
            </div>
        </div>
    )
}
export default Post;