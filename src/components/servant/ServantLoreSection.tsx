import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export function ServantLoreSection({ title, children }: Props) {
  return (
    <div className="bg-[#3E322F] p-6 rounded-lg border border-[#5A4A44]">
      <h3 className="text-3xl font-bold text-[#D4A373] mb-6">
        {title}
      </h3>
      <div className="text-[#EAE0D5] leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}
