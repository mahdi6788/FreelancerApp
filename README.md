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
   First, install tanstack query, then make a queryClient and wrap all elements in App using QueryClientProvider. by doing this we can use the query throughout the project.
10. ***useQuery and useMutation*** wherever we want to get, post, put or delete data in backend, we implement useQuery and useMutation: useQuery to get data, useMutation to post, put, delete data. In details, when we want to mutate (change) in database (backend), we should use useMutation(), but when we just want to get data from database, we use useQuery(). Both need a function to get or post or... data and contains API to communicate with backend, which is mutationFn or queryFn respectively that is the api function we created in services folder.
useQuery needs a key to be determined what it got, named **queryKey**:["..."].
When using useMutation(), we want to make changes in database, so we need to update. to do this we use the queryKey defined when we got the data from database. 
useMutation needs **mutate** that gets the new data that we want to ssend to database and also onSuccess function that shows what happend after successful post data.

  Example to get data from database (useQuery):
    
    const {data, isLoading} = useQuery({
    queryKey: ["projects"],
    queryFn: getOwnerProjectsApi,
    })

  Explanation: here, we want to get data from database, so we need a key and function.
  function is "getOwnerProjectsApi" that returns:
  http.get("/project/owner-projects").then(({data}) => data.data)
  so useQuery gets data from database through axios.get command and from the above address.

  Example to post data to database (useMutation):
    
    const queryClient = useQueryClient()

    const {isPending: isCreating, mutate:  createproject} = useMutation({
        mutationFn: createProjectApi,
        onSuccess: (data) => {
            toast.success(data.message)
             queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
             })
        },
        onError: (err) => {
            toast.error(data?.response?.data?.message)
        }
    })

  Explanation: when mutation (here, creating new project) is successful, we need to show a message in this regard and more important we must invalidate the previous query that shows projects, resulting geting new list of projects.
  **onSuccess**: anything we want to happend after succesing we put in onSuccess(){} as a callback function
 

*. to have a clean code we put codes regarding communication with backend (http.get and http.post) to different js files for each feature separately:
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

24. there is two types of add event listener : bubbling, capturing
    the third parameters of eventlistener is determined as listenCapturing = true, it prevents from closing the modal automatically immadiately.

25. develop a form to make a project: which types of fields we need? and how to send them to backend?
    title, description, category, tags, budget, deadline.
    input: text or number
    tags: multi input
    deadline: date picker.
    validation: backend(more important and necessary) and frontend.
    There is different ways to create forms: 1. Formik. 2. react-hook-form
    **_react-hook-form_**: simple to learn and optimum.
    react-hook-form manages state and submitting so no need to useState

26. **options** **_react-tag-input-component_**
27. **Date** **_react-multi-date-picker_**
28. **fetch categories** to show in options: to fetch data from backend, we need to make a js file in services folder named categoryService containing http.get("/category/list") and need to have its response so use .then():
    http.get("/category/list").then(({data}) => data.data)
    the above code is getting list of categoris from backend.
    similarly, in authServices, we wanted to get otp, check otp, complete profile and ... also in projectServices we need get projects or delete specific one.
    After introducing API in services, use useQuery to get data as a custome hook namly useCategories. useQuery needs a key and a function that is the getCategoriesAPI we defined before in services. useQuery has different outlets like data and isLoading.

29. **_Create New Project_**
    as usual we need to work with backend so we need to create a new function related to API: createProjectApi(). here, we want to send (post) a data that is a new created project to backend: http.post("project/add", data).then(({data}) => data.data)
    then we create a custome hook : useCreateProject and also use it in where new project is created.

    30. ***edit***
    use CreateProjectForm and 
