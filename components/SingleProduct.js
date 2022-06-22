import styles from "./SingleProduct.module.css";
import Image from "next/image";

export default function SingleProduct(props) {
  console.log(props);
  const { id, imageUrl, name, description, price } = props;

  return (
    <div key={id} className={styles.product}>
      <Image src={imageUrl} alt={`Image of ${name}`} height={640} width={640} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price}</span>
      <div>
        <button
          className="snipcart-add-item"
          data-item-id={id}
          data-item-image={imageUrl}
          data-item-name={name}
          data-item-url="/"
          data-item-price={price}
          data-item-custom1-name="Color"
          data-item-custom1-options="Black|Brown|White"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
