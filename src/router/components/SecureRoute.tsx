import { getXToken } from "@/utils";
import { useNavigate } from "react-router-dom";
import { useEffect, Suspense } from "react";
import { Outlet } from "react-router-dom";

export const SecureRoute = () => {
  const navigate = useNavigate();
  // Ideally would be nice to have separate request to check is users authenticated and call it
  // cause we cannot to check is token valid or not, so we can have token in localstorage but it could be expired
  const token = getXToken();

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      // The default case is redirect into the App, not to external link
      window.location.href = `https://www.dating.com/people/#token=${token}`;
    }
  }, [token, navigate]);

  // Shouldn't render outlet if user is not Authenticated
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};
