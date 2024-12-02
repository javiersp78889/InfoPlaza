import { useLibros } from "../hooks/useLibros"
import { LibrosContext } from "./LibrosContext"

export const LibrosProvider = ({ children }) => {
    const { onChange, onSubmit, nombre, open, cerrar,respuesta } = useLibros()
    return (
        <LibrosContext.Provider value={{ onChange, onSubmit, nombre, open, cerrar,respuesta }}>
            {children}
        </LibrosContext.Provider>
    )
}