type Props = {
  image: string;
};

export default function ProjectBanner({ image }: Props) {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg mb-10 border border-[#5A4A44]">
      <img
        src={image}
        alt="Banner do projeto"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
