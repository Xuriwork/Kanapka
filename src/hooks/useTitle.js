import { useEffect } from 'react';

export const useTitle = ({ openFoodModal, orders }) => {
    useEffect(() => {
        if (openFoodModal) {
            document.title = 'Kanapka - ' + openFoodModal.name;
        }
    })
};