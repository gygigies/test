'use client'
import getRestaurants from "@/libs/getRestaurants";
import { Suspense, useEffect, useState } from "react";
import { LinearProgress } from "@mui/material"
import RestaurantCatalog from "@/components/RestaurantCatalog";
import styles from "./page.module.css"
import { RestaurantJson } from "../../../../interface";

export default function Restaurant() {

    const [reload, setReload] = useState(false);
    const [restaurants, setRestaurants] = useState<RestaurantJson|null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const restaurantsData = await getRestaurants();
            setRestaurants(restaurantsData);
        };

        // Check if the page is being reloaded for the first time
        if (!reload) {
            setReload(true);
            fetchData();
        }
    }, [reload]);

    if(!restaurants){
        return null;
    }

    return (
        <main className={styles.page}>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <RestaurantCatalog restaurantsJson={restaurants}/>
            </Suspense>
        </main>
    )
}


