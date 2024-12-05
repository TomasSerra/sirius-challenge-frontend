import React from 'react'
import AutoCarousel from '../../carousel/AutoCarousel'
import Banner from '../Banner'
import styles from './BannerCarousel.module.scss'

const BannerCarousel = () => {
  return (
    <div>
        <AutoCarousel>
            <div className={styles["banner-container"]}>
                <Banner 
                    name='Minecraft'
                    imageUrl="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Buzzy-Bees_1280x768.jpg"
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc fermentum ultricies. Nullam nec purus nec nunc fermentum ultricies.'
                    genres={['Action', 'Adventure', 'RPG', 'Sandbox', 'Survival', 'Open World']}
                    platforms={['playstation', 'xbox', 'pc']}
                    id="1"/>
            </div>
            <div className={styles["banner-container"]}>
                <Banner 
                    name='Cyberpunk 2077'
                    imageUrl="https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/bxSj4jO0KBqUgAbH3zuNjCje.jpg"
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc fermentum ultricies. Nullam nec purus nec nunc fermentum ultricies.'
                    genres={['Action', 'Adventure', 'RPG']}
                    platforms={['playstation', 'xbox', 'pc', 'mac']}
                    id="2"/>
            </div>
            <div className={styles["banner-container"]}>
                <Banner 
                    name='The Witcher 3'
                    imageUrl="https://static.bandainamcoent.eu/high/the-witcher/the-witcher-3-wild-hunt/00-page-setup/tw3-new-header-mobile.jpg"
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc fermentum ultricies. Nullam nec purus nec nunc fermentum ultricies.'
                    genres={['Action', 'Adventure', 'RPG']}
                    platforms={['playstation', 'xbox', 'pc', 'nintendo']}
                    id="3"/>
            </div>
        </AutoCarousel>
    </div>
  )
}

export default BannerCarousel