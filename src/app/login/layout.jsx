
import Providers from "@/app/provider";

export const metadata = {
    title: 'ورود',
}

const LoginLayout = ({children}) => {
    return (


        <Providers>
            {children}
        </Providers>


    )
}
export default LoginLayout