export default function Logo({ className = 'h-9', src = '/gcm-logo.png' }) {
  return (
    <img
      src={src}
      alt="Gem Consultant Meganathan"
      className={`w-auto object-contain ${className}`}
      width={460}
      height={135}
    />
  )
}
