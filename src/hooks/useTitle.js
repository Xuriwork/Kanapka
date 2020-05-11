import { useEffect } from 'react';

export const useTitle = ({ openFoodModal }) => {
    useEffect(() => {
        if (openFoodModal) {
            document.title = 'Kanapka - ' + openFoodModal.name;
        }
    })
};