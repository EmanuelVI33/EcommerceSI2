import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "../ui/button"
import { adminRoutes } from "@/src/constants/routes"
import { logoutAction } from "@/actions/auth-actions"

function AdminSidebar() {
    return (
        <aside className="h-screen p-2 rounded-md border-r-4 flex flex-col justify-between">
            <div>
                <h2 className="font-semibold text-xl mb-2 text-center">Administración</h2>
                {adminRoutes.map((route, index) => (
                    route.subMenu 
                    ?  
                        <Accordion key={index} type="single" collapsible className="mb-4">
                            <AccordionItem value="item-1">
                            <AccordionTrigger className="p-2 rounded-md text-sm">
                                {route.title}
                            </AccordionTrigger>
                            <AccordionContent className="mt-2">
                                <div className="flex flex-col gap-2">
                                    {route.subMenu.map((menu, index) => (
                                        <Button key={index}>
                                            <Link 
                                                href={menu.href}
                                                className=""
                                            >{menu.title}
                                            </Link>
                                        </Button>
                                    ))}
                                </div>
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion> 
                    : <p key={index}>{route.title}</p>
                ))}
            </div>
            <form action={logoutAction}>
                <Button type="submit" className="mb-2 w-full">Cerrar Sesion</Button>
            </form>
        </aside>
    )
}

export default AdminSidebar
