import {Logo} from "@/component/logo/logo";
import {Progress} from "@nextui-org/react";

export const LoadingUI = () => {
return(
        <div className={'w-full flex flex-col'}>
            <div className={'flex justify-center'}>
                <Logo/>
            </div>
            <div className="my-20 w-full flex justify-center">
                <Progress
                    size="sm"
                    isIndeterminate
                    aria-label="Loading..."
                    className="max-w-md"
                />
            </div>
        </div>
)
}