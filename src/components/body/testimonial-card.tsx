import { Typography } from "@poweredbygen/gen-ui";
import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string | StaticImageData;
}

export const TestimonialCard = ({
  quote,
  name,
  title,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <div className="flex h-[280px] flex-1 flex-col justify-between rounded-xl bg-(--testimonial-bg) p-8">
      <div className="flex flex-1 flex-col gap-4">
        {/* Quote */}
        <Typography
          variant="body2"
          className="flex-1 text-[16px] font-normal leading-[26px] text-(--surface-primary)"
        >
          {quote}
        </Typography>

        {/* User Info */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-(--outline)">
            <Image src={imageUrl} alt={name} fill className="object-cover" />
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col">
            <Typography
              variant="title"
              className="text-[16px] font-medium leading-6 text-(--surface-primary)"
            >
              {name}
            </Typography>
            <Typography
              variant="caption1"
              className="text-[12px] font-normal leading-5 text-[#7A7A83]"
            >
              {title}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
