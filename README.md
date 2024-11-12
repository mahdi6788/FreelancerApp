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
9. isctall tanstack query. then make a queryClient and wrap all elements in App by QueryClientProvider. by doing this we can use react query use throughout the project.
10. useQuery to get data, useMutation to post, put, delete data.
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
