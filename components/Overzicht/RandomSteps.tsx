import React, { useState, useEffect } from "react";

interface RandomStepsProps {
    type: string;
}

const RandomSteps: React.FC<RandomStepsProps> = ({ type }) => {
    const [randomSteps, setRandomSteps] = useState<number[]>([]);

    useEffect(() => {
        if (type === "day") {
            // Predefined steps for controlled output
            const predefinedSteps = [800, 1200, 15000, 9000, 5313, 4300];
            // Function to shuffle the predefined steps
            const generateRandomSteps = () => {
                return predefinedSteps.sort(() => Math.random() - 0.5);
            };

            // Generate the shuffled random steps
            const randomStepsArray = generateRandomSteps();
            setRandomSteps(randomStepsArray);
        }
    }, [type]);

    return (
        <>{JSON.stringify(randomSteps)}</>
    );
};

export default RandomSteps;
