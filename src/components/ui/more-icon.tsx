import { cn } from "@/lib/utils";

function MoreIcon({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-5 h-5 items-center flex flex-row space-x-0.5 cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="w-1 h-1 bg-gray-600 rounded-full" />
      <div className="w-1 h-1 bg-gray-600 rounded-full" />
      <div className="w-1 h-1 bg-gray-600 rounded-full" />
    </div>
  );
}

export { MoreIcon };
