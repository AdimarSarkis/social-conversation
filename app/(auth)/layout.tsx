import { Children } from "react";

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="bg-gray-600 h-full text-neutral-100">
            {children}
        </div>
     );
}
 
export default AuthLayout;