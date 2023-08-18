'use client'
import {Progress, Spinner} from "@nextui-org/react";
import {Logo} from "@/component/logo/logo";
import {LoadingUI} from "@/component/loading/loading";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <main className="dark  flex min-h-screen flex-col items-center justify-between p-24">
            <LoadingUI/>
        </main>
        )
}