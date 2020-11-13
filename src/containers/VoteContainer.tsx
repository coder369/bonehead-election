import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { createSetSelectedElectionAction, refreshElections } from "../actions/electionActions";
import { getVoter, refreshVoters } from "../actions/voterActions";
import { CaptureVotes } from "../components/vote/CaptureVotes";
import { AppState } from "../models/AppStore";

export function VoteContainer() {
    const stateProps = useSelector((state: AppState) => state);
    // {
    //     return {
    //         elections: state.elections,
    //         voters: state.voters,
    //         selectedElection: state.selectedElection,
    //         selectedVoter: state.selectedVoter,
    //         errorMessage: state.errorMessage,
    //     }
    // });

    const dispatch = useDispatch();

    const boundActionProps = useMemo(
        () =>
            bindActionCreators(
                {
                    onRefreshElections: refreshElections,
                    onRefreshVoters: refreshVoters,
                    onSelectElection: createSetSelectedElectionAction,
                    onSelectVoter: getVoter
                },
                dispatch
            ),
        [dispatch]
    );

    return <CaptureVotes {...stateProps} {...boundActionProps} />
}
