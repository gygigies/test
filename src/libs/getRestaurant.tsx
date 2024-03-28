export default async function getRestaurant(rid:string) {
    const response = await fetch(`https://backendtest-five.vercel.app/api/v1/restaurants/${rid}`)
    if (!response.ok) {
        throw new Error("Failed to fetch restaurant")
    }
    return await response.json()
}