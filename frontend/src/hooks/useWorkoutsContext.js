import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
	const context = useContext(WorkoutsContext);

	if (!context) {
		throw Error(
			"useWorkoutsContxt must be used inside a WorkoutsContextProvider"
		);
	}

	return context;
};
