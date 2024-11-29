1. Install **tailwind**.
2. install **react router dom**.
3. arrange files and folders according to **_Feature Based Folder Structure_** method.
4. **individulize styles in Tailwind**: @layer components{ .textField\_\_input @apply{...} }
5. in ui folder, make a global component for input and its label.
6. install react-icons and react-otp-input
7. install axios and an instace of that named app and make an object that contains get, post, ... .
8. use the http.post to make a function for getting and cheking otp.

9. in the getOtp() function we post phoneNumber. so we use useMutation mutateFn is getOtp as an object.

10. .then(({data})=>data.data) helps go deeper into the response and get deep information.
11. when we have diffrent steps, we need to count them step by step, so we create step and setStep.
12. **react-loader-spinner**: is used to show loading process in the global Loading component.
13. it is better that do not put useEffect and event functions into the page, so make a component and put them there.
14. there are 3 panels: admin, owner, freelancer
15. create an appLayout component in ui folder, contaning differen constant parts like header, sidebar, footer and also the dynamic part that is the main section of panel, which can be one of admin, owner or freelancer, so we should put <Outlet/>, meaning that the content depends on the outlet data and is provided by components of Owner, Admin or Freelancer.
<!--
<Route element={<AppLayout/>} >
    <Route path="/owner" element={<Owner/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/freelancer" element={<Freelancer/>} />
</Route>
-->
16. there are dashboard, projects and project in owner route:
<!--
<Route path="/owner" element={<AppLayout />}>
  <Route index element={<Navigate to="dashboard" replace/>} />
  <Route path="dashboard" element={<OwnerDashboard />} />
  <Route path="projects" element={<Projects/>} />
  <Route path="projects/:id" element={<Project/>} />
</Route>
-->

17. status 2 means elligible to make changes in app.

18. **_Compound Components_**

19. to arrange the size of modal:
    w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto

20. There is different ways to create forms: 1. **Formik**. 2. **react-hook-form**
    **_react-hook-form_**: simple to learn and optimum.

- react-hook-form manages state and submitting so no need to useState

26. **options** **_react-tag-input-component_**
27. **Date** **_react-multi-date-picker_**

28. **fetch categories** :
    to fetch data from backend:
29. categoryService: a js file in services folder to get list of categories from backend, containing http.get("/category/list") and need to have its response so use .then(): http.get("/category/list").then(({data}) => data.data)
30. useCategories: a custome hook to get data, implementing useQuery that needs a key and a function that is the getCategoriesAPI. return the reult of this useQuery.
31. use the results like data and isPending in any component we need the data from database

32. **_Create New Project_**
    as usual we need to work with backend so we need to create a new function related to API: createProjectApi(): post the data (new project) to backend: http.post("project/add", data).then(({data}) => data.data)
    useCreateProject: a custom hook to use to the useMutation is used to get function (mutateFn) and return mutate to use where new project is created.

    30. **_edit_**
        use CreateProjectForm

    31. **_Edit_** isEditOpen is used to determine whether the modal for editing is open. However, if isEditOpen is shared among multiple rows, clicking the "edit" button on any row could open multiple modals or send multiple project objects to CreateProjectForm.

    32. put **Modals outside the Table**, otherwiae event.target and ref.current have interface

    33. making blur the user avatar when it is loading causes better performance.

    34. **Dark Mode**
    35. use localstorage to keep the user preference after refreshing the page.
    36. put the main command we want to execute when the page is run into useEffect.

    37. three main section: owner, freelancer, admin:
        each one has layout and dashboard. when users click on owner for example, they navigate to OwnerDashboard through the dashboard path:
        <Route path="/owner" element={<OwnerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
        </Route>
    
