"use client"

import { Category } from "@/src/types"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Props {
    category: Category
}

function CategoryIcon({ category } : Props) {
    const params = useParams<{category: string}>()
    
    return (
        <div className={`${category.id == params.category ? 'bg-amber-500' : ''} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
            <div className="w-16 h-16 relative">
                <Image 
                    fill
                    src='/icon_cafe.svg'
                    alt="Imagen Categoria"
                />
            </div>

            <Link 
                href={`${category.id}`}
                className="text-xl font-bold"
            >
                {category.name}
            </Link>
        </div>
    )
}

export default CategoryIcon
