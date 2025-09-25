import { CONTACT_INFO_TYPE } from "@/constants";
import { cn } from "@/lib";

type ContactInfoCardProps = CONTACT_INFO_TYPE & {
    variant?: "brand" | "dark";
};

const ContactInfoCard = ({
    icon,
    title,
    description,
    variant = "brand",
}: ContactInfoCardProps) => {
    return (
        <div className={cn(
            "rounded-md p-2.5 flex items-start gap-2",
            variant === "brand" && "bg-brand/3 dark:bg-gray-800",
            variant === "dark" && "bg-brand/80 dark:bg-gray-800" )}>

            <div className={cn("size-5",
                variant === "brand" && "text-brand dark:text-blue-500",
                variant === "dark" && "text-gray-200 dark:text-blue-500" )}>
                {icon}
            </div>

            <div className="space-y-1.5">

                <h2 className={cn(
                        "text-sm md:text-base font-medium",
                        variant === "brand" && "text-gray-900",
                        variant === "dark" && "text-gray-200"
                    )}>
                    {title}
                </h2>

                <p className={cn(
                        "text-xs md:text-sm",
                        variant === "brand" && "text-gray-500",
                        variant === "dark" && "text-gray-200"
                    )}>
                    {description}
                </p>

            </div>
            
        </div>
    );
};

export default ContactInfoCard;
