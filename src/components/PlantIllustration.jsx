function potShape(hue) {
  return (
    <path
      d="M28 78 L72 78 L66 100 L34 100 Z"
      fill={`hsl(${hue}, 25%, 40%)`}
      stroke={`hsl(${hue}, 25%, 25%)`}
      strokeWidth="1.5"
    />
  )
}

function Succulent({ hue }) {
  const leaf = `hsl(${hue}, 55%, 45%)`
  const leafLight = `hsl(${hue}, 55%, 60%)`
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" role="img">
      {potShape(hue)}
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse
          key={i}
          cx={50 + Math.cos((i / 5) * Math.PI * 2) * 16}
          cy={70 + Math.sin((i / 5) * Math.PI * 2) * 12}
          rx="14"
          ry="18"
          fill={i % 2 === 0 ? leaf : leafLight}
          transform={`rotate(${i * 30} 50 70)`}
        />
      ))}
      <ellipse cx="50" cy="66" rx="12" ry="14" fill={leafLight} />
    </svg>
  )
}

function AirPurifying({ hue }) {
  const leaf = `hsl(${hue}, 50%, 38%)`
  const leafLight = `hsl(${hue}, 50%, 50%)`
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" role="img">
      {potShape(hue)}
      {[-24, -12, 0, 12, 24].map((offset, i) => (
        <path
          key={offset}
          d={`M50 78 C ${50 + offset * 0.4} 55, ${50 + offset} 35, ${50 + offset * 1.2} 15`}
          stroke={i % 2 === 0 ? leaf : leafLight}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      ))}
    </svg>
  )
}

function Aromatic({ hue }) {
  const leaf = `hsl(${hue}, 45%, 42%)`
  const leafLight = `hsl(${hue}, 45%, 55%)`
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" role="img">
      {potShape(hue)}
      {Array.from({ length: 9 }).map((_, i) => {
        const angle = (i / 8) * 140 - 70
        const rad = (angle * Math.PI) / 180
        const len = 32
        return (
          <line
            key={i}
            x1="50"
            y1="78"
            x2={50 + Math.sin(rad) * len}
            y2={78 - Math.cos(rad) * len}
            stroke={i % 2 === 0 ? leaf : leafLight}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        )
      })}
    </svg>
  )
}

export default function PlantIllustration({ category, hue = 140 }) {
  if (category === 'Succulents') return <Succulent hue={hue} />
  if (category === 'Air-Purifying') return <AirPurifying hue={hue} />
  return <Aromatic hue={hue} />
}
