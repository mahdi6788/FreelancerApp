import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalService";
import { useLocation } from "react-router-dom";

export default function useProposals(){
    const {data, isLoading} = useQuery({
        queryFn: getProposalsApi,
        queryKey: ["proposals"]
    })

    const {proposals} = data || {}

    return {proposals, isLoading}
}