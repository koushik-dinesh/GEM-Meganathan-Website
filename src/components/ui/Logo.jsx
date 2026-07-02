export default function Logo({ className = 'h-9' }) {
  return (
    <img
      src="/gcm-logo.png"
      alt="Gem Consultant Meganathan"
      className={`w-auto object-contain ${className}`}
      width={168}
      height={44}
    />
  )
}
