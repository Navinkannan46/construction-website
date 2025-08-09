import { useEffect, useState } from "react"
import api from "../../../lib/api"
import swal from 'sweetalert';
const useFetchImages = () => {
    const [fetchDatas, setFetchDatas] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await api.get('/gallery')
                setFetchDatas(response.data)
            } catch (error: any) {
                swal(error.response?.data.message)
            }
        }
        fetchData()
    }, [])

    return { fetchDatas }
}

export default useFetchImages