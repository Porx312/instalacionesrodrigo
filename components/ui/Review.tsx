import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewCardProps {
  name: string;
  avatarUrl: string;
  projectType: string;
  rating: number;
  comment: string;
}

export default function ReviewCard({
  name,
  avatarUrl,
  projectType,
  rating,
  comment,
}: ReviewCardProps) {
  return (
    <div className="w-full max-w-sm rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={avatarUrl}
            alt={`Avatar de ${name}`}
            layout="fill"
            objectFit="cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
            }}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
            {projectType}
          </span>
        </div>
      </div>
      <div
        className="mb-3 flex"
        aria-label={`Calificación: ${rating} de 5 estrellas`}
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"} fill-current`}
          />
        ))}
      </div>
      <p className="text-gray-600 italic">&ldquo;{comment}&rdquo;</p>
    </div>
  );
}
