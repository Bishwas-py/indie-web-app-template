import {
    faBook,
    faColumns,
    faFaceAngry,
    faHeart,
    faLocation,
    faManatSign,
    faSearch,
    faTextHeight
} from "@fortawesome/free-solid-svg-icons";
import {faEtsy, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default [
    {
        title: "Dashboard",
        faIcon: faColumns,
        url: "/dashboard"
    },
    {
        title: "Long Tail Keyword Generator",
        faIcon: faTextHeight,
        url: "/dashboard"
    },
    {
        title: "About Us Generator",
        faIcon: faBook,
        gap: true,
        url: "/dashboard"
    },
    {
        title: "Search",
        faIcon: faSearch,
        url: "/dashboard"
    },
    {
        title: "Linkedin Hashtag Generator",
        faIcon: faLinkedin,
        url: "/dashboard"
    },
    {
        title: "Etsy Tag Generator",
        faIcon: faEtsy,
        url: "/apps/etsy-tag-generator"
    },
]