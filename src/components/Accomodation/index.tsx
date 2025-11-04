import { IconHeartFilled, IconStarFilled } from "@/assets/icons";

interface AccomodationProps {
    children: React.ReactNode,
    location: string,
    host: string,
    date: string,
    price: number,
    rating: number
    preferred: boolean
}

const Accomodation = ( { children, location, host, date, price, rating, preferred }: AccomodationProps ) => {
    return (
        <figure className="relative">
            <div className="p-2 absolute">
                { preferred && (
                    <span className="bg-white rounded-2xl px-4 py-1 my-1 font-semibold text-[0.6875rem] xl:w-28 line-clamp-2">
                        Preferido dos Hóspedes
                    </span>
                )}
            </div>
            <IconHeartFilled className="stroke-white opacity-80 absolute top-2.5 right-1"
                    aria-label="Favoritos"
                    size={25}
            />
            {children}
            <figcaption className="pt-2">
                <div className="flex justify-between">
                    <span className="font-semibold">{location}</span>
                    <span className="flex gap-0.5 items-center font-semibold">
                        <IconStarFilled
                            aria-label="Avaliações"
                            size={15}
                        />
                        {rating}
                    </span>
                </div>
                <div>Anfitriã(o): {host}</div>
                <div>{date}</div>
                <div className="font-semibold">R$ {price}</div>
            </figcaption>
        </figure>
    )
}

export default Accomodation;