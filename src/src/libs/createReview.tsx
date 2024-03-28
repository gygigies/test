export default async function createReview(newRestaurantData: any) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`https://backendtest-five.vercel.app/api/v1/restaurants/${newRestaurantData.rid}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRestaurantData)
    });

    if (!response.ok) {
        throw new Error("Failed to create restaurant");
    }

    return await response.json();
}
