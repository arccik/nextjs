import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <Link href={props.href}>
      <div className={styles.card}>
        <h2 className={styles.name}>{props.name}</h2>
        <Image
          className={styles.img}
          src={props.imgUrl}
          width={260}
          height={160}
        />
      </div>
    </Link>
  );
};

export default Card;
