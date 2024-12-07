import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


type LazyImageProps = {
    src: string,
    alt: string,
    className?: string

}

const LazyImage = ({ src, alt, className="" }: LazyImageProps) => {
  return (
    <LazyLoadImage
        src={src}
        alt={alt}
        className={className}
        draggable={false}
        effect='blur'
    />
  )
}

export default LazyImage