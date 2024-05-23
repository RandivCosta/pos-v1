import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

const Header = () => {
    return (
        <div className="flex justify-between items-center sticky top-0 z-40 bg-slate-100 py-2">
        <div className="ml-4 lg:ml-8 cursor-pointer">
            <Link href='/dashboard'><h1 className="font-bold">Ceyinfo POS</h1></Link>
        </div>

        <div className="mr-4 lg:mr-12">
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>

                <PopoverContent className="w-40">
                    <div>
                        <h2>Randiv Costa</h2>
                    </div>
                    <p>
                        Account settings
                    </p>
                </PopoverContent>
            </Popover>
        </div>
        </div>
    )
}

export default Header