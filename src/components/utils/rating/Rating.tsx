import { useEffect, useState } from "react";

type RatingProps = {
    rating: number;
}

const Rating = ({rating}: RatingProps) => {
    const [color, setColor] = useState<string>('#06883C');

    useEffect(() => {
        if (rating >= 0 && rating < 40) {
            setColor('#881906');
        } else if (rating >= 40 && rating < 70) {
            setColor('#DF7A14');
        } else {
            setColor('#06883C');
        }
    }, [rating]);

  return (
    <div 
        style={{
            width: '50px', 
            height: '50px', 
            borderRadius: '15px', 
            backgroundColor: color,
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
            opacity: 0.85,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        {rating}
    </div>
  )
}

export default Rating