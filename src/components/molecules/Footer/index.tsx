import type { UxuiFooterSection } from "../../../core/interfaces/landing-page.interface";

interface Props {
    data?: UxuiFooterSection;
}

const Footer: React.FC<Props> = ({ data }) => {

    if (!data) return;

    return (
        <h1>{data.title1}</h1>
    )
}

export default Footer;