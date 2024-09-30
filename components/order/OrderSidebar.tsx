import { fetchCategories } from '@/src/lib/api/categories'
import Logo from '../ui/Logo'
import CategoryIcon from '../ui/CategoryIcon'
import { logoutAction } from '@/actions/auth-actions'
import { Button } from '../ui/button'

export default async function OrderSidebar() {
  const { data } = await fetchCategories()
  const categories = data.data  

  return (
    <aside className="md:w-72 md:h-screen bg-white">
        <Logo />
        <div className="overflow-y-auto h-2/3 mb-5 p-2">
          {categories && categories.map(category => (<CategoryIcon  key={category.id} category={category} />))}
        </div>
        <form className="m-2" action={logoutAction}>
          <Button type="submit" className="mb-2 w-full">Cerrar Sesion</Button>
        </form>
    </aside>
  )
}
