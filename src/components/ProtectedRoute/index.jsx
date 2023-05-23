import { Navigate } from 'react-router'
import { useAuth } from '../AuthContext'

export function ProctectedRoute({children}){
    const { user, loading  } = useAuth()

    if (loading) return <h1>Loading</h1>;

    if (!user) return <Navigate to='/login'/>

    return <> {children} </>
}