import { LazyLoadImage } from 'react-lazy-load-image-component';

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
        wrapperProps={{
            style: {transitionDelay: "1s"},
        }}
    />
  )
}

export default LazyImage