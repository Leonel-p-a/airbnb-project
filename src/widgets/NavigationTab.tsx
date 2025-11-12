'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconAdjustmentsHorizontal } from '@/assets/icons';
import ButtonIcon from '@/components/ButtonIcon';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import { Photo } from '@/types/AirbnbData';

interface NavigationTabProps {
    icons: Array<Photo>
}

const NavigationTab = (props: NavigationTabProps) => {

    const icons = props.icons;

    return (
        <div className='flex flex-row items-center'>
            {/* Navegação de filtros */}
            <Swiper
                space-between={10}
                slidesPerView={'auto'}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    764: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                    1280: { slidesPerView: 9 },
                }}
            >

                {icons.map((icon, index) => (
                    <SwiperSlide key={index}>
                        <Link href={icon.url} className='flex flex-col items-center hover:text-red-500'>
                            <Image 
                            src={icon.source}
                            alt={icon.description}
                            width={24}
                            height={24}
                            />
                            <span className='text-xs'>{icon.description}</span>
                        </Link>
                    </SwiperSlide>
                ))}

            </Swiper>

            {/* Ícone de filtro */}
            <ButtonIcon
                icon={(
                    <IconAdjustmentsHorizontal
                        aria-label="Ícone de usuário"
                        size={20}
                    />
                )} >
                Filtros
            </ButtonIcon>
        </div>
    )
}

export default NavigationTab;