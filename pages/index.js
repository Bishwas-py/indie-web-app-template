
import {useState} from "react";
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
