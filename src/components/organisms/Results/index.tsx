import type { UxuiResultsSection } from "../../../core/interfaces/landing-page.interface";

interface Props {
    data?: UxuiResultsSection;
}

const Results: React.FC<Props> = ({ data })  => {
    return (
        <h1>Results: {data?.title}</h1>
    )
}

export default Results;