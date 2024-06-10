import { useEffect } from "react";
import { useRouter } from "next/router";
import { authstatus } from "@/stores/auth";
import { useSelector } from "react-redux";

const IndexPage = () => {
  const router = useRouter();
  const authStateredux = useSelector(authstatus);
  let authState;
  if (typeof window !== "undefined") {
    authState = localStorage.getItem("auth");
  }

  useEffect(() => {
    if (authState == "false" || authState == null) {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    console.log("sdsds");
    localStorage.setItem("auth", "false");
    router.push("/login");
  };
  return (
    <div className="flex flex-col w-full bg-white h-screen justify-center items-center">
      {authState ? (
        <div className="flex flex-col   justify-center items-center">
          <h1
            className="w-40 text-center py-3 px-4 bg-[#E48700] hover:bg-[#e5921d] text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e5921d] cursor-pointer"
            onClick={() => handleLogout()}
          >
            Logout
          </h1>
          <span className="pt-4">Welcome to Dashboard</span>
        </div>
      ) : (
        <div className="flex w-full h-screen justify-center items-center ">
          <span className="bg-[#d8d4ce]">
            Please Login You Being Redirect to Login page
          </span>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
