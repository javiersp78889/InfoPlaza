import axios from "axios"
import Swal from "sweetalert2";

const Api = 'https://infoplazaback.onrender.com/libros/find';

export const FindLibro = async (body) => {
    try {
        console.log(body)
        const response = await axios. post(Api,body)
     
        return response.data
        
    } catch (error) {

        Swal.fire({
            icon: "error",
            title: "Ha Ocurrido Algo",
            text: error,
          });
        
    }
   
}