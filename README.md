**NOTES** : we should put hooks just after the function word before retrun, if or any thing else

1. Install tailwind and set different parts.
2. install react router dom.
3. arrange files and folders according to Featur based folder structure method:

- feature: instead of using component folder, use feature folder, containing project, proposal, authentication, category, user, cart, ticket, comment review, ... .
- in each feature, there are components, hooks, context, ...., that are related to the feature.
- hooks: global hooks, used throughout the project.
- ui: components, used throughout the project: Button.jsx, Input.jsx, Loading.jsx,...
- styles: contains global styles and fonts
- utils: helper functions
- services: comunication with backend: authApi.js, projectApi.js
- pages: Auth.jsx, Dashboard.jsx, Profile.jsx, Proposal.jsx
  \*\* it is better not to have side effects (useEffect and event function) into each page, and there are just components and these components are located in features.

4. individulize styles in Tailwind: @layer components{ .textField\_\_input @apply{...} }
5. make component for input and its label as a global and useful component. and put it into ui folder.
6. install react-icons and react-otp-input
7. install axios and an instace of that named app and make an object that contains get, post, ... .
8. use the http.post to make a function for getting and cheking otp.
9. **_ tanstack query _** it is like react query, and we can get, post, put and delelte data through that.
   First, install tanstack query, then make a queryClient and wrap all elements in App using QueryClientProvider. by doing this we can use this query throughout the project.
10. in each function that we want to make advantage of this query we should implement useQuery and useMutation: useQuery to get data, useMutation to post, put, delete data.
    Example to get data from database (useQuery):
    const {data, isLoading} = useQuery({
    queryKey: ["projects"],
    queryFn: getOwnerProjectsApi,
    })
    Explanation: here, we want to get data from database, so we need a key and function.
    function is "getOwnerProjectsApi" that returns:
    http.get("/project/owner-projects").then(({data}) => data.data)
    so useQuery gets data from database through axios.get command and from the above address.

example to post data to database (useMutation):
const { isPending: isSendingOtp, mutateAsync, data:otpResponse } = useMutation({
mutationFn: getOtp,
});
Explanation: here, we want to send data (phoneNumber) to backend and get response, so use useMutation that need a function
that is getOtp that return the response:
return http.post("/user/get-otp", data).then(({data})=>data.data)

to have a neet code we put codes regarding communication with backend (http.get and http.post) to different js files for each feature separately:
(useUser (for authentication feature) and useOwnerProjects (for projects feature))

11. in getOtp(data) we want to post data (phoneNumber), so we use useMutation that get getOtp as an object.
12. **_ Note _** we want to connect to backend and database so we need to run the backend program first.
13. use this: .then(({data})=>data.data) to go further into the response and get deep information
14. when we have diffrent steps, we need to count them step by step, so we create step and setStep by useState().
15. react-loader-spinner: is used to show loading process and create Loading component in ui folder to use in different parts of the program.
16. we do not like to put side effects into a page, so make a component and put different functions there.
17. make a not found page used when user enter unknown address.
18. there are 3 panels: admin, owner, freelancer
19. create an applayout component in ui folder, contaning differen constant parts like header, sidebar, footer and also the dynamic part that is the main section of panel, which can be one of admin, owner or freelancer, so we should put <Outlet/>
there, meaning that the content depends on the outlet data and provided by components of Owner, Admin or Freelancer.
<!--
<Route element={<AppLayout/>} >
    <Route path="/owner" element={<Owner/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/freelancer" element={<Freelancer/>} />
</Route>
-->
20. there are dashboard, projects and project in owner route:
<!--
<Route path="/owner" element={<AppLayout />}>
  <Route index element={<Navigate to="dashboard" replace/>} />
  <Route path="dashboard" element={<OwnerDashboard />} />
  <Route path="projects" element={<Projects/>} />
  <Route path="projects/:id" element={<Project/>} />
</Route>
-->
21. using mongoDB compass we can see inside the database and through postman we can add, edit, update and remove users including admin, owner and freelancers. after making profile we should put status 2 to make it elligible to make changes in program. Also, we can update data inside database through mongoDB directly.

22. **_Compound Components_**

23.to arrange the size of modal: 
w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto