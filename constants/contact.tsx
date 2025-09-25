import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

export type CONTACT_INFO_TYPE = {
    icon: ReactNode;
    title: string;
    description: string;
};

export const CONTACT_INFO: CONTACT_INFO_TYPE[] = [
    {
        icon: <MapPinIcon className="size-5" />,
        title: "Address",
        description: "123 Health Ave, Suite 456, City, State, ZIP",
    },
    {
        icon: <PhoneIcon className="size-5" />,
        title: "Call Us",
        description: "+1 (234) 567-8900",
    },
    {
        icon: <EnvelopeIcon className="size-5" />,
        title: "Email",
        description: "fold@example.com",
    },
    {
        icon: <ClockIcon className="size-5" />,
        title: "Business Hours",
        description: "Mon-Fri: 9am - 5pm",
    },
];

export type CONTACT_MAP_INFO_TYPE = {
    title: string;
    mapSrc: string;
    address: string;
    phone: string;
    mapLink?: string;
};

export const CONTACT_MAP_INFO = [
    {
        title: "Main Office - City Center",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.8472464055626!2d-3.4385248228275507!3d55.37812202078751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487d5707775fef9b%3A0x5ee2f35ace142dab!2sAbarth%20Unity%20Kidlington!5e0!3m2!1sen!2sng!4v1756632387493!5m2!1sen!2sng",
        address: "123 Health Ave, Suite 456, City, State, ZIP",
        phone: "+1 (234) 567-8900",
        mapLink: "https://maps.google.com/maps/dir//Abarth+Unity+Kidlington+Banbury+Road+Woodstock+OX5+1JH+United+Kingdom/@55.378119,-3.4359499,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x487d5707775fef9b:0x5ee2f35ace142dab",
    },
    {
        title: "Branch Office - Uptown",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2266.8472464055626!2d-3.4385248228275507!3d55.37812202078751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487d5707775fef9b%3A0x5ee2f35ace142dab!2sAbarth%20Unity%20Kidlington!5e0!3m2!1sen!2sng!4v1756632387493!5m2!1sen!2sng",
        address: "456 Wellness St, Suite 789, City, State, ZIP",
        phone: "+1 (987) 654-3210",
        mapLink: "https://maps.google.com/maps/dir//Abarth+Unity+Kidlington+Banbury+Road+Woodstock+OX5+1JH+United+Kingdom/@55.378119,-3.4359499,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x487d5707775fef9b:0x5ee2f35ace142dab2",
    },
];
