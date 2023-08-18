"use client"
import {Button, Card, CardBody, CardFooter, Image, pagination, Progress, Spinner} from "@nextui-org/react";
import {Swiper, SwiperSlide} from "swiper/react";
import {MovieCard} from "@/component/card/movie/movieCard";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import {useKeenSlider} from "keen-slider/react";
import Link from 'next/link';
import {Logo} from "@/component/logo/logo";
import { motion } from "framer-motion";

export default function Home() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    const list = [{
        title: "Her",
        img: "https://framerusercontent.com/images/B77YRFPrlZDt1pq9CSFVewM7U.jpeg?scale-down-to=512",
        price: "2017",
    }, {
        title: "Her", img: "/movie.jpg", price: "2017",
    }, {
        title: "Her", img: "/movie.jpg", price: "2017",
    }, {
        title: "Her", img: "/movie.jpg", price: "2017",
    },
        {
            title: "Her",
            img: "https://framerusercontent.com/images/B77YRFPrlZDt1pq9CSFVewM7U.jpeg?scale-down-to=512",
            price: "2017",
        }, {
            title: "Her", img: "/movie.jpg", price: "2017",
        }, {
            title: "Her", img: "/movie.jpg", price: "2017",
        }, {
            title: "Her", img: "/movie.jpg", price: "2017",
        },
        {
            title: "Her",
            img: "https://framerusercontent.com/images/B77YRFPrlZDt1pq9CSFVewM7U.jpeg?scale-down-to=512",
            price: "2017",
        }, {
            title: "Her", img: "/movie.jpg", price: "2017",
        }, {
            title: "Her", img: "/movie.jpg", price: "2017",
        }, {
            title: "Her", img: "/movie.jpg", price: "2017",
        },
        {
            title: "Her",
            img: "https://framerusercontent.com/images/B77YRFPrlZDt1pq9CSFVewM7U.jpeg?scale-down-to=512",
            price: "2017",
        }, {
            title: "Her", img: "/movie.jpg", price: "2017",
        }, {
            title: "Her", img: "/movie.jpg", price: "2017",
        }, {
            title: "Her", img: "/movie.jpg", price: "2017",
        }];
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 15,
        },
    })
    return (
        <main className="dark  flex min-h-screen flex-col items-center justify-between p-24">
            <motion.div
                         variants={container}
                         initial="hidden"
                         animate="visible"
                         className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                    {list.map((item, index) => (
                        <MovieCard  title={item.title} img={item.img} id={index} price={item.price}/>
                    ))}
            </motion.div>
        </main>
        )
}
