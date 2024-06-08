import { useEffect } from "react";
import { useRouter } from "next/router";
import { Loader} from "@cpm/package-manager";

const IndexPage = () => {
  const router = useRouter()
useEffect(() => {
router.push("/login")
},[])
  return (
    <>
      <Loader isLoading />
    </>
  );
};

export default IndexPage;
