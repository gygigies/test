export default async function removeReservation(token:string, reservationId: string) {
    const response = await fetch(`https://backendtest-five.vercel.app/api/v1/reservations/${reservationId}`, {
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

