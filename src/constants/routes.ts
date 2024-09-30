const adminBaseRoute = 'admin'
export const adminRoutes = [
    {
        title: 'Gestionar categorías',
        subMenu: [
            {
                title: 'Crear category',
                href: `/${adminBaseRoute}/categories/create`
            },
            {
                title: 'Listar Categorías',
                href: `/${adminBaseRoute}/categories`
            }
        ],
    },
    {
        title: 'Gestionar productos',
        subMenu: [
            {
                title: 'Crear producto',
                href: `/${adminBaseRoute}/products/create`
            },
            {
                title: 'Listar productos',
                href: `/${adminBaseRoute}/products`
            }
        ]
    },
    {
        title: 'Gestionar sucursales',
        subMenu: [
            {
                title: 'Registrar sucursal',
                href: `/${adminBaseRoute}/branchs/create`
            },
            {
                title: 'Listar Categorías',
                href: `/${adminBaseRoute}/branch`
            }
        ]
    }
]