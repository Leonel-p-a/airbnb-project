import { IconStarFilled } from "@/assets/icons";
import { Testimonials } from "@/types/AirbnbData";
import Image from "next/image";

interface AccommodationTestimonialsProps {
    testimonials: Array<Testimonials>
}

const AccommodationTestimonials = (props: AccommodationTestimonialsProps) => {
    const testimonials = props.testimonials;

    return (
        <div className="w-full py-4">
            <h2 className="text-2xl font-semibold pb-3">Depoimentos</h2>

            <div className="flex items-center gap-2">
                <IconStarFilled className="size-4" />
                <span>4.9 (400+ avaliações)</span>
            </div>

            {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-row gap-2 py-4 items-start">
                    <Image
                        className="aspect-square rounded-full object-cover"
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                    />

                    <div>
                        <span className="text-md font-semibold">{testimonial.name}</span>
                        <p>{testimonial.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AccommodationTestimonials;