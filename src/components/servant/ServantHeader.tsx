interface Props {
  name: string;
  className: string;
  rarity: number;
}

export function ServantHeader({ name, className, rarity }: Props) {
  return (
    <header className="text-center mb-10">
      <h1 className="text-5xl font-bold text-white">{name}</h1>
      <p className="text-2xl text-[#D4A373] capitalize">
        {className} — {"★".repeat(rarity)}
      </p>
    </header>
  );
}
