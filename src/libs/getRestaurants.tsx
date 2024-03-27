export default async function getRestaurants() {

    await new Promise( (resolve)=>setTimeout(resolve, 1000) )
    
    const response = await fetch("https://backendtest-five.vercel.app/api/v1/restaurants")
    if (!response.ok) {
        throw new Error("Failed to fetch restaurants")
    }
    return await response.json()
}


