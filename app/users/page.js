
import { Suspense } from "react";
import UsersList from "../_components/UsersList";
import Spinner from "../_components/Spinner";



export const metadata = {
  title: "Creating user",
};

export default async function Page() {

  return (

     <div>
          <h1 className="text-4xl mb-5 text-accent-400 font-medium">
            All users
          </h1>
    
          <Suspense fallback={<Spinner/>}>
            <UsersList/>
          </Suspense>
        </div>
    
  );
}
