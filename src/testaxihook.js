import useAxios from 'axios-hooks'
import React from 'react'

function Apple() {
const [{ data, loading, error }, refetch] = useAxios('http://localhost:3000/order-products')
if (loading) return <p>Loading...</p>
if (error) return <p>Error!</p>

return (
    <div>
        <button onClick={refetch}>refetch</button>
        <p>{data}</p>
    </div>
)
}

export default Apple;