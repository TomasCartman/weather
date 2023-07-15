import { useState } from "react"

export default function useSearchCity() {
    const [searchCity, setSearchCity] = useState('')

    const setOnChange = value => {
        setSearchCity(value)
    }

    return {
        setOnChange,
        searchCity
    }
}