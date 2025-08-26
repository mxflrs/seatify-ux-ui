import React from 'react';
import type { UxuiFooterSection } from '../../../core/interfaces/landing-page.interface';
import { useContactDialogStore } from '../../../core/store/contactDialogStore';

interface Props {
    data?: UxuiFooterSection;
}

const VideoFooter: React.FC<Props> = ({ data }) => {
    const open = useContactDialogStore((state) => state.open);

    if (!data) {
        console.warn('VideoFooter component: No data provided');
        return null;
    }

    return (
        <footer className="bg-gray-200 bg-gradient h-screen flex flex-col justify-center items-center *:text-white full-width mt-24">
            <h2 className="font-thin">{data.title1}</h2>
            <h2 className="font-thin py-2">{data.title2}</h2>
            <p className="font-inter">{data.description}</p>
            <button
                onClick={open}
                className="button-gradient my-24 inline-flex items-center justify-center rounded-full font-thin transition-all duration-200 mx-auto ring-1 ring-white/25 hover:ring-white/50 cursor-pointer px-8 py-4 text-base bg-black text-black! hover:bg-sfv-green-600 hover:text-black select-none"
            >
                {data.cta}
            </button>
            <p className="font-inter text-xs">{data.address}</p>
            <p className="font-inter text-xs">{data.addressTag}</p>
        </footer>
    );
};

export default VideoFooter;
