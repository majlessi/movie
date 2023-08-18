'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Button, Input} from "@nextui-org/react";
import {MailIcon, PhoneIcon} from "@/component/icon/icon";
import {PiUserDuotone} from "react-icons/pi";
import React from "react";
import {Logo} from "@/component/logo/logo";
import toast from "react-hot-toast";
import Link from 'next/link'
const Login = () => {
    const notify = () => {
        toast.success("ورود با موفقیت انجام شد", {
            style: {
                background: 'rgba(0,255,43,0.11)',
                color: '#fff'
            },
        })
    }
    return (<>
        <main className="dark bg-banner flex items-center sm:items-start min-h-screen flex-col px-10 sm:px-40">
            <form className={'form'} onSubmit={notify}>
                <div className={'mt-40'}>
                    <div className={'mb-24 flex justify-center sm:justify-start'}>
                        <Logo height={40}/>
                    </div>
                    <h4 onClick={notify} className={'text-white text-3xl text-center sm:text-right font-bold'}> بی‌وقفه فیلم ببین</h4>
                    <h2 className={'text-white text-center sm:text-right text-base opacity-20 mt-2'}>شماره موبایل خود را وارد کنید</h2>
                    <div className={'mt-10   login'}>
                        <Input
                            color={"default"}
                            size={"lg"}
                            type="email"
                            placeholder="شماره موبایل "
                            endContent={<PhoneIcon width={40}
                                                   className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>}
                        />
                    </div>
                    <div className={'mt-10 flex justify-between'}>
                        <Button radius="full" size={"lg"}
                                color="default" href="" variant="light">
                            <p className={'text-base'}>
                                برگرد خونه
                            </p>
                        </Button>
                        <Button as={Link} radius="full" endContent={<PiUserDuotone size={20} stroke={'20px'}/>}
                                size={"lg"}
                                color="primary" href="/" variant="shadow">
                            <p className={'text-base'}>
                                ثبت نام
                            </p>
                        </Button>
                    </div>
                </div>
            </form>
        </main>
    </>)
}

export default Login