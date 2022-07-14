import { useRouter } from "next/router";
import Link from "next/link";
const CoffeeStore = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Link href="/">Back to home </Link>
      <h1>Coffee Store Page {id}</h1>
    </div>
  );
};
export default CoffeeStore;
