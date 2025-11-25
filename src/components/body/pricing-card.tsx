import { Typography } from "@poweredbygen/gen-ui";
import { Button } from "../common/button";

interface PricingCardProps {
  title: string;
  credits: string;
  commentsPerDay: string;
  price: string;
  features: string[];
}

export const PricingCard = ({
  title,
  credits,
  commentsPerDay,
  price,
  features,
}: PricingCardProps) => {
  return (
    <div className="flex w-[517px] flex-col rounded-xl bg-white p-8">
      <div className="flex flex-col gap-6">
        {/* Header and features */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {/* Title */}
            <Typography
              variant="h6"
              className="text-[20px] font-medium leading-7 text-(--faq-text)"
            >
              {title}
            </Typography>

            {/* Features list */}
            <div className="flex flex-col gap-1">
              <Typography
                variant="body2"
                className="text-[16px] font-normal leading-[26px] text-(--faq-text)"
              >
                What you get
              </Typography>
              <ul className="flex flex-col gap-2">
                <li>
                  <Typography
                    variant="body2"
                    className="text-[16px] font-normal leading-[26px] text-(--faq-text)"
                  >
                    • {credits}: enough for up to {commentsPerDay} comments a
                    day.
                  </Typography>
                </li>
                {features.map((feature, index) => (
                  <li key={index}>
                    <Typography
                      variant="body2"
                      className="text-[16px] font-normal leading-[26px] text-(--faq-text)"
                    >
                      • {feature}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Button */}
        <Button variant="primary" className="h-12 w-fit rounded-3xl px-6">
          <Typography
            variant="buttonSmall"
            className="text-[16px] font-medium leading-[26px] text-(--text-on-primary)"
          >
            {price}
          </Typography>
        </Button>
      </div>
    </div>
  );
};
