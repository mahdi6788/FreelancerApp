**_NOTES_**

1. hooks (built-in and custome) should place at first in a component, before useEffect and handler (event) functions.
2. In any project that we have database either static (as a json filelocated in public folder in frontend) or dynamic (in a backend file), it is neccessary to connect to backend and database so we need to run it first.
3. mongoDB compass and postman are used to watch, add, edit, update and remove data in database.
4. put **Modals outside the Table**, otherwiae event.target and ref.current have interface
5. To navigate user to a page there is t2 options: 1. button or 2. Link
    <button onClick(Navigate("/page"))> test <button>
    <Link to="/page">test</Link>
6. In Dark Mode, use localstorage to keep the user preference after refreshing the page.

**_Feature Based Folder Structure_** method:

- **feature**: instead of using the component folder, use the feature folder, containing project, proposal, authentication, category, user, cart, ticket, comment review, ... .
- each feature contains components, hooks, context, ..., that are related to the feature.
- **hooks**: global hooks, used throughout the project.
- **ui**: global components, used throughout the project: Button.jsx, Input.jsx, Loading.jsx,...
- **styles**: global styles and fonts
- **utils**: utility (helper) functions
- **services**: functions to get, post, delete, patch, ... data to backend through API.
- **pages**: jsx files like components but we prefer to put side effects in component rather than pages to prevent from long functions.

**_ context and custome hook _**
step 1: create a context:
step 2: create a function: containing context.Provider to provide values that are props we want to share in other components.
step 4: Also contains a custom hook to use the created context in components that need these values (props).

    component name: TestContext.jsx
    1. const TestContext = createContext()
    2. export function TestProvider({children}){
      return (
        <TestContext.Provider value={{}}>
        {children}
        </TestContext.Provider>
      )}
    3. export function useTest(){
      const context = useContext(TestContext)
      if(context === undefined)
        throw new Error("TestContext was used outside of TestProvider")

      return context
    }
    * After building this component we should:
    1. Wrap TestProvider on all elements in the App component,
    2. Call the useTest function in each component we need to use the values (props)

**_NOTE2_**
each activity we want to do that affects database needs three main steps:

1. make a function containig an **API** via http.get/post/put/delete/patch
2. make a **custom hook** to use the above function.
3. **call** the above custom hook in the component that we want to change database or get data from there.

**_ tanstack query _**
First, install tanstack query, then make a queryClient and wrap all elements in App using QueryClientProvider. by doing this we can use the query throughout the project.
create new queryClient in the App component but outside the App function, then wrap all elements in the App component through <QueryClientProvider client={queryClient}>
const queryClient = new QueryClient();

**_useQuery and useMutation_** wherever we want to get, post, put or delete data in backend, we implement useQuery and useMutation: useQuery to get data, useMutation to post, put, delete data. In details, when we want to mutate (change) in database (backend), we should use useMutation(), but when we just want to get data from database, we use useQuery(). Both need a function to get, post or... data and contains API to make connection with backend, which is **mutationFn** or **queryFn** respectively that is the api function we created in services folder.

- useQuery needs a key to be determined what it got, named **queryKey**:["..."].
  When using useMutation(), we want to update the database, so we use the defined queryKey.
  for example:
  1. remove previous data and put new one with this key:
     queryClient.invalidateQueries({
     queryKey: ["owner-projects"]
     })
  2. remove data:
     queryClient.removeQueries();

**useMutation**(Mutate the database): when we want to make a change in database, we want to send a new data so we put these data into **mutate**. useMutation does this using mutationFn. onSuccess and onError function shows what happend after posting data.

**_Get data from Database via backend API_**
there are 5 methods to connection to backend: get, post, put, patch, and delete.
**services** folder:

1. httpService.js:

- const BASE_URL = "..."
- const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true /// all cookies including access and refresh tokens are send to backend
  })
- const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch
  }
- export default http

/// export http to use in functions located in service folder:

2.  use http to use different methods for different purposes including:
    /// e.g. get users from backend:
    export function getUser(){
    return http.get("/user/profile").then(({data}) => data.data)
    }
    /// post otp as a data to backend and then get response from there
    export function checkOtp(data){
    return http.post("/user/check-otp", data).then(({data})=>data.data)
    }

3.  custome hook:
    export default function useUser(){
    const {data, isLoading} = useQuery({
    queryKey: ["..."],
    queryFn: getUser /// name of function containing api
    })
    return {data, isLoading}
    }

    export default function useCreateProject(){
    const queryClient = useQueryClient()
    const {isPending: isCreating, mutate: createproject} = useMutation({
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
    return {isCreating, createproject}
    }

4.  after creating custome hook to connection with backend for getting or posting data, we can use this custome hook in the componenet we want to use the data or mutate the data.

**_Modal_**
there is two types of add event listener : bubbling, capturing.
the third parameters of eventlistener is determined as listenCapturing = true, it prevents from closing the modal automatically.