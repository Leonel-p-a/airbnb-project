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
            <div className="p-2 absolute w-full flex gap-3 justify-between items-center">
                {preferred && <span className="bg-white border-1 border-gray-400 rounded-xl px-4 py-1 font-semibold text-xs">Preferido dos Hóspedes</span>}
                <IconHeartFilled className="stroke-white opacity-80"
                    aria-label="Favoritos"
                    size={30}
                />
            </div>
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