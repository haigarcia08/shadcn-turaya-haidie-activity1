import Link from "next/link"
import {Menu} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Logo} from "@/components/logo"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {categories} from "@/app/data";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {DialogHeader} from "next/dist/client/components/react-dev-overlay/ui/components/dialog";
import {DialogTitle} from "@radix-ui/react-dialog";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";


export function SiteHeader() {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 flex h-16 items-center">
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Logo/>
                    </Link>
                </div>
                {/*<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="hidden md:flex items-center">
                        <Button variant="ghost" asChild>
                            <Link href="/free">
                                Free
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/premium">
                                Premium
                            </Link>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button variant="ghost" asChild>
                                    <Link href="/categories">
                                        Categories
                                    </Link>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {
                                    categories.map((category, key) => <DropdownMenuItem key={key} asChild>
                                        <Link href={category.slug}
                                              className="text-sm font-medium transition-colors hover:text-primary">
                                            {category.name}
                                        </Link>
                                    </DropdownMenuItem>)
                                }

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>

                     Mobile navigation
                    <div className="md:hidden flex-1 flex justify-end">
                        <MobileNav/>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Button asChild>
                            <Link target="_blank"
                                  href="https://docs.google.com/forms/d/e/1FAIpQLSeO3p92JgmsiRW3nGoZ0AbdudHo4k37B2--5NM-h7CXj_d06g/viewform">Submit</Link>
                        </Button>
                    </div>
                </div>*/}
            </div>
        </header>
    )
}

function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5"/>
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className='px-2'>
                <VisuallyHidden>
                    <DialogHeader>
                        <DialogTitle>Dialog</DialogTitle>
                    </DialogHeader>
                </VisuallyHidden>
                <nav className="flex flex-col gap-1 mt-6">
                    <Link href="/free" className="text-sm block p-2 font-medium transition-colors hover:text-primary">
                        Free Templates
                    </Link>
                    <Link href="/premium"
                          className="text-sm block p-2 font-medium transition-colors hover:text-primary">
                        Premium Templates
                    </Link>
                    {
                        categories.map((category, key) => <Link href={category.slug} key={key}
                                                                className="text-sm block p-2 font-medium transition-colors hover:text-primary">
                            {category.name}
                        </Link>)
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

