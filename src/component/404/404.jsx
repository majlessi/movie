import {Button, Image} from "@nextui-org/react";
import {CardIcon, HomeIcon} from "@/component/icon/icon";
import React from "react";

const NotFound = () => {
  return(
      <div className={'flex flex-col items-center'}>
          <Image
              width={300}
              alt="404"
              src="/gifs/404.gif"
          />
          <p className={'text-white text-xl text-center sm:text-3xl mt-12'}>این فیلمو رو تموم کردیم </p>
          <p className={'text-white opacity-60 text-sm text-center sm:text-xl mt-2'}>ولی مشابه‌اش رو داریـــم</p>
          <div className="flex mt-5">
              <Button  className={'mt-5 ml-5'} radius={"full"} size={"lg"}
                       color="success"  variant="bordered" startContent={<HomeIcon stroke={'#00B574'} width={24} strokeWidth={2.5} />}>برگرد خونه</Button>
              <Button className={'mt-5'} radius={"full"} size={"lg"} startContent={<CardIcon width={28} strokeWidth={1.5} stroke={'white'}/>}
                      color="success"  variant="shadow">فیلم های مشابه</Button>
          </div>
      </div>
  )
}

export default NotFound