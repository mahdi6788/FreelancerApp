import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";


export default function useProjects() {
  /// to get params into searchbar containing searchParams
  const {search} = useLocation()
/// to parse params got from searchbar and make an object
  const queryObject = queryString.parse(search)
/// send search info to api to get filtered data whenever info changes.
  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject], /// this means whenever queryObject changes, send request and get data
    queryFn: () => getProjectsApi(search), /// search is sent to api to get data in this regard
  });

  const { projects } = data || {};

  return { projects, isLoading };
}
