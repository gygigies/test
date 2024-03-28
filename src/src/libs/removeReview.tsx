export default async function removeReservation(token:string, reviewId: string) {
    const response = await fetch(`https://backendtest-five.vercel.app/api/v1/reviews/${reviewId}`, {
        method: "DELETE",
        headers: {
            "authorization" : `Bearer ${token}`
        },
    })
    if(!response.ok) {
        throw new Error("Failed to log-in")
    }

    return await response.json()

}

