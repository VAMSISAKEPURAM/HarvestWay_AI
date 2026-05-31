import logo from "@/assets/logo.png";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img src={logo.src} alt="HarvestWayAI logo" className={className} width={512} height={512} />
  );
}
