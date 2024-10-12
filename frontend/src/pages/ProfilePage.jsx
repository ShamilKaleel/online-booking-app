import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../components/AccountNav";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    const response = await axios.post("/logout");
    // console.log(response.data);
    if (response.data) {
      setRedirect("/");
      setUser(null);
    }
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div className="mx-auto mt-28 md:max-w-screen-xl min-h-screen">
      <div className="mx-5 2xl:mx-0">
        <div>
          <AccountNav />
          {subpage === "profile" && (
            <div className="text-center max-w-lg mx-auto">
              Logged in as {user.name} ({user.email})<br />
              <button onClick={logout} className="primary max-w-sm mt-2">
                Logout
              </button>
            </div>
          )}
          {subpage === "places" && <PlacesPage />}
        </div>
      </div>
    </div>
  );
}
