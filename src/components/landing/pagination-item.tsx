import { PaginationItemProps } from "@/app/components/mintlify";

export function PaginationItem({ label, isActive, onClick }: PaginationItemProps) {
    return (
      <div
        className={`pagination-item flex items-center space-x-2 cursor-pointer transition-all ${isActive ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
        onClick={onClick}
        role="button"
        aria-selected={isActive}
      >
        <div className={`h-8 w-[4px] rounded-lg transition-colors ${isActive ? "bg-rose-gold-400 " : "bg-gray-600"}`} />
        <div className={`text-lg font-medium transition-transform ${isActive ? "text-rose-gold-400" : ""}`}>
          {label}
        </div>
      </div>
    );
  }