type Props = {
  title: string;
};

export default function ProjectHeader({ title }: Props) {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">
      Projeto: {title}
    </h2>
  );
}
