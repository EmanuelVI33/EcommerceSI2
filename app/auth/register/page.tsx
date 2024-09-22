import RegisterCard from "@/components/auth/RegisterCard"
import AuthLayout from "../layout"

function RegisterPage() {
    return (
        <AuthLayout title="Crear Cuenta">
            <RegisterCard />
        </AuthLayout>
    )
}

export default RegisterPage