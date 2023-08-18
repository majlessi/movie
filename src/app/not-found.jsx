'use client'
import {LoadingUI} from "@/component/loading/loading";
import {Button, Image} from "@nextui-org/react";
import {PiUserDuotone} from "react-icons/pi";
import React from "react";
import {CardIcon, HomeIcon} from "@/component/icon/icon";
import { motion } from "framer-motion";
import Link from "next/link";

const NotFound = () => {
  return(
      <motion.main initial={{ scale: 0 ,rotate:180}}
                   animate={{ rotate: 0, scale: 1 }}
                   transition={{
                       type: "spring",
                       stiffness: 260,
                       damping: 20
                   }} className="dark not-found flex min-h-screen flex-col items-center justify-between p-24">
         <div className={'flex flex-col items-center'}>
             <Image
                 width={300}
                 alt="404"
                 src="/gifs/404.gif"
             />
             <p className={'text-white text-xl text-center sm:text-3xl mt-12'}>این فیلمو رو تموم کردیم </p>
             <p className={'text-white opacity-60 text-sm text-center sm:text-xl mt-2'}>ولی مشابه‌اش رو داریـــم</p>
             <div className="flex mt-5">
                     <Button as={Link} href={'/'}  className={'mt-5 ml-5'} radius={"full"} size={"lg"}
                              color="success"  variant="bordered" startContent={<HomeIcon stroke={'#00B574'} width={24} strokeWidth={2.5} />}>برگرد خونه</Button>
                 <Button as={Link} href={'/'}  className={'mt-5'} radius={"full"} size={"lg"} startContent={<CardIcon width={28} strokeWidth={1.5} stroke={'white'}/>}
                         color="success"  variant="shadow">فیلم های مشابه</Button>
             </div>
         </div>
      </motion.main>
  )
}

export default NotFound