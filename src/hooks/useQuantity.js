import { useState } from 'react';

export const useQuantity = (defaultQuantity) => {
    const [value, setValue] = useState(defaultQuantity || 1);

    return {
        value,
        setValue
    }
};

export const usePieces = (pieces) => {
    const [value, setValue] = useState(pieces);

    return {
        value,
        setValue
    }
};