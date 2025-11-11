'use client';

import Accomodation from "@/components/Accommodation";
import { AccommodationsType } from "@/types/AirbnbData";
import Image from "next/image";
import Link from "next/link";

interface AccomodationProps {
    accommodation: Array<AccommodationsType>
}

const Accommodations = (props: AccomodationProps) => {
    const accomodationsList = props.accommodation;

    if (!accomodationsList || accomodationsList.length === 0) {
        return (
            <section className="py-6">
                <p className="text-center text-gray-500">
                    Nenhuma acomodação disponível no momento.
                </p>
            </section>
        );
    }

    return (
        <section className="py-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {accomodationsList.map((item, index) => (
                <div key={item.id || index}>
                    <Link href={item.slug || '#'}>
                        <Accomodation
                            location={item.location?.description || 'Localização não disponível'}
                            host={item.host || 'Anfitrião não disponível'}
                            date={item.date || 'Data não disponível'}
                            price={item.price || 0}
                            rating={item.rating || 0}
                            preferred={item.hasBadge || false}
                        >
                            <Image 
                                className="w-full aspect-square object-cover rounded-2xl"
                                src={item.photos?.[0]?.source || '/placeholder-image.jpg'}
                                alt={item.photos?.[0]?.description || 'Imagem da acomodação'}
                                width={300}
                                height={300}
                            />
                        </Accomodation>
                    </Link>
                </div>
            ))}
        </section>
    )
}

export default Accommodations;