
import React from 'react';
import { IMAGES } from '../constants';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`flex items-center ${className}`}>
        <img
            src={IMAGES.LOGO_BRAND}
            alt="Efran Engenharia"
            className="h-14 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
        />
    </div>
);
