'use client'
import React from "react";
import {Rotate as Hamburger} from 'hamburger-react'
import { motion } from "framer-motion"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    DropdownTrigger, DropdownItem, Dropdown, DropdownMenu, Input
} from "@nextui-org/react";
import {Logo} from "@/component/logo/logo";
import {PiUserDuotone} from "react-icons/pi";
import {ChevronDown, IMDB, SearchIcon} from "@/component/icon/icon";
import {BestListNav} from "@/data/data";
import Link  from 'next/link';
import {usePathname} from "next/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = ["انیمیشن", "سریال", "فیلم"];
    const path = usePathname()
    if (path !== '/'){
        return <></>
    }
    else {
        return (
            <Navbar
                shouldHideOnScroll
                isBordered
                height={'5rem'}
                className={'py-4'}
                dir={'rtl'}
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <div className={'hidden-in-desktop'}>
                        <Hamburger color={"white"} onToggle={() => {
                            setIsMenuOpen(!isMenuOpen)
                        }}/>
                    </div>
                    <NavbarBrand className={'py-4'}>
                        <Logo height={45}/>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden-in-mobile" justify="center">


                    {menuItems.map((item, index) => (
                        <NavbarItem>
                            <Link className={'text-white'} href="#">
                                {item}
                            </Link>
                        </NavbarItem>
                    ))}
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                    endContent={<ChevronDown fill={'currentColor'} size={16}/>}
                                    radius="sm"
                                    variant="light"
                                >
                                    <NavbarItem>
                                        <Link color="foreground" href="/login">
                                            بهترین ها
                                        </Link>
                                    </NavbarItem>
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            dir={'rtl'}
                            aria-label="ACME features"
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                            {
                                BestListNav.map((item,index)=>(
                                    <DropdownItem
                                        className={'transition'}
                                        style={{margin:"5px 0"}}
                                        dir={'rtl'}
                                        key={index}
                                        startContent={item.logo}>
                                        <div className={'w-full flex items-start flex-col '}>
                                            <p className={'text-white text-xl'}>
                                                {item.title}
                                            </p>
                                            <p className={'text-white'}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </DropdownItem>
                                ))
                            }
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>

                        <Button radius="full" as={Link} href={'login'} endContent={<PiUserDuotone size={20} stroke={'20px'}/>} size={"lg"}
                                color="primary"  variant="shadow">
                            <p className={'text-base'}>
                                ثبت نام
                            </p>
                        </Button>

                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {
                        menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <div dir={'rtl'} className={'w-full flex items-start flex-col '}>
                                    <p className={'text-white text-xl'}>
                                        {item}
                                    </p>
                                </div>
                            </NavbarMenuItem>
                        ))
                    }
                </NavbarMenu>
            </Navbar>)
    }
}
