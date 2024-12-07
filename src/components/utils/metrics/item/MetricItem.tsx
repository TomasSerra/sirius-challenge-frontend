
type MetricItemProps = {
    color: string;
    text: string;
    value: number;
}

const MetricItem = ({color, text, value}: MetricItemProps) => {
  return (
    <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
        <span style={{backgroundColor: color, width: '10px', height: '10px', borderRadius: '50%'}}></span>
        <p style={{fontWeight: 'bold'}}>{text}</p>
        <p style={{color: '#49494C'}}>{value}</p>
    </div>
  )
}

export default MetricItem