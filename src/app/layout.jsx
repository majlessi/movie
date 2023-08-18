
import '../styles/globals.css'
import {Inter} from 'next/font/google'
import Providers from "@/app/provider";
import {ToastProvider} from "@/component/toast/toast";
import {usePathname} from "next/navigation";
import Header from "@/component/layout/header/header";

const inter = Inter({subsets: ['latin']})
export const metadata = {
    title: 'رایومووی', description: '...',
}
export default function RootLayout({children}) {

    return (
        <html dir={'rtl'} lang="en">
            <body className={'dark bg-[#0A0027]'}>
             <Header/>
            <ToastProvider/>
            <Providers>
                    {children}
             </Providers>
            </body>
        </html>
    )
}
