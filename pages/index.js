import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {useState} from "react";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import paths from "../utils/paths";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import DashboardContentLayout from "../layout/DashboardContentLayout";

export default function Home() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <DashboardContentLayout>
                Hey
            </DashboardContentLayout>
        </div>
    )
}
