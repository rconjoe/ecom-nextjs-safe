import styles from "./SingleProduct.module.css";
import Image from "next/image";

export default function SingleProduct({
  item_id,
  title,
  slug,
  images,
  description,
  price,
}) {
  const hostname = process.env.NODE_ENV === 'production' ? 'https://frabjous-vacherin-4e37c4.netlify.app' : 'http://localhost:3000'
  return (
    <div key={item_id} className={styles.product}>
      <Image
        src="http://placekitten.com/640/640"
        alt={`Image of ${title}`}
        height={640}
        width={640}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>${price}</span>
      <div>
        <button
          class="snipcart-add-item"
          data-item-id={item_id}
          data-item-image="http://placekitten.com/640/640"
          data-item-title={title}
          data-item-url={`${hostname}/api/${slug}`}
          data-item-price={price}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
