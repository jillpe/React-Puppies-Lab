import React from 'react';
import { useLocation } from 'react-router-dom';
import PuppyCard from '../../components/PuppyCard/PuppyCard';

export default function PuppyDetailPage(props) {
    const { state: { puppy } } = useLocation()

    return (
        <>
            <h1>Puppy Details</h1>
            <PuppyCard
                key={puppy._id}
                puppy={puppy}
            />
        </>
    );
}