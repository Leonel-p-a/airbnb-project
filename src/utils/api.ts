import { AirbnbApi } from "@/types/AirbnbData";

export async function fetchData(): Promise<AirbnbApi> {
    try {
        const response = await fetch('https://web.codans.com.br/airbnb');
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        
        return {
            accommodation: data.accommodation || [],
            icons: data.icons || []
        };
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        
        return {
            accommodation: [],
            icons: []
        };
    }
}