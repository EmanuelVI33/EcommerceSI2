import { fetchCategories } from '@/src/lib/api/categories'
import Logo from '../ui/Logo'
import CategoryIcon from '../ui/CategoryIcon'

export default async function OrderSidebar() {
  const {data: categories } = await fetchCategories()

  console.log(categories)

  return (
    <aside className="md:w-72 md:h-screen bg-white">
        <Logo />

        {categories && categories.map(category => (<CategoryIcon  key={category.id} category={category} />))}
    </aside>
  )
}
