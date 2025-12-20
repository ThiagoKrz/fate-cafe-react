type Props = {
  image: string;
  onClose: () => void;
};

export default function Lightbox({ image, onClose }: Props) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    >
      <img
        src={image}
        alt="Imagem ampliada"
        className="max-w-[90vw] max-h-[90vh] rounded-md object-contain"
      />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-5xl font-bold"
      >
        &times;
      </button>
    </div>
  );
}
