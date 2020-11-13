import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ElectionTable } from "../components/election/ElectionTable";

import { AppState } from "../models/AppStore";

export function ElectionTableContainer() {
    const stateProps = useSelector((state: AppState) => {
        return {
            elections: state.elections,
        };
    });


    return <ElectionTable {...stateProps}/>;
}