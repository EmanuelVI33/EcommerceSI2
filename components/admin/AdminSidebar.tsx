import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "../ui/button"

const routeBase = 'admin'
const routes = [{
    title: 'Gestionar categorías',
    subMenu: [
        {
            title: 'Crear categorías',
            href: `/${routeBase}/categories/create`
        },
        {
            title: 'Listar Categorías',
            href: `/${routeBase}/categories`
        }
    ]
}]

function AdminSidebar() {
    return (
        <aside className="p-2 rounded-md">
            <h2 className="font-semibold text-xl mb-2 text-center">Administración</h2>
            {routes.map((route, index) => (
                route.subMenu 
                ?  
                    <Accordion key={index} type="single" collapsible>
                        <AccordionItem value="item-1">
                        <AccordionTrigger className="hover:bg-primary/90 p-2 rounded-md text-sm">
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
        </aside>
    )
}

export default AdminSidebar
