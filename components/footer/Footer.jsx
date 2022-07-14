import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Footer(props) {
  return (
    <>
      {props.children}
      <footer className={styles.footer}>
        <p>© 2022 Archy</p>
      </footer>
    </>
  );
}
