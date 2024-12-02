import { useEffect, useState } from "react"
import { FindLibro } from "../Services/Libro"
import Swal from "sweetalert2"
const initial = {
    "nombre": ""
}
const initial_response ={
    "nombre":"",
    "autor":"",
    "cantidad":"",
    "estante":""
}
export const useLibros = () => {
    const [name, setName] = useState(initial)
    const { nombre } = name
    const [cambio,setCambio]=useState(true)
    const [open, setOpen] = useState(true)
    const [respuesta,setRespuesta]=useState(initial_response)


    const onChange = (event) => {
        setName({ [event.target.name]: event.target.value })
    }

    const cerrar = ()=>{
        setOpen(false)
    }

    const onSubmit = async (event) => {
        event.preventDefault()

        const response = await FindLibro(name)
        if(response.length > 0){
            setRespuesta(response)
            setCambio(!cambio)
        }else{
                Swal.fire({
                    icon: "error",
                    title: "Lo Sentimos...",
                    text: "Libro No Encontrado!",
                  });
     
        }

        
    }

    useEffect(()=>{
        setOpen(!open)
        setName(initial)
    },[cambio])


    return {

        onChange,
        onSubmit,
        nombre,
        open,
        cerrar,
        respuesta

    }
}