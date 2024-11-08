1. Install tailwind and set different parts.
2. install react router dom.
3. arrange files and folders according to Featur based folder structure method:
* feature: instead of using component folder, use feature folder, containing project, proposal, authentication, category, user, cart, ticket, comment review, ... .
* in each feature, there are components, hooks, context, ...., that are related to the feature.
* hooks: global hooks, used throughout the project.
* ui: components, used throughout the project: Button.jsx, Input.jsx, Loading.jsx,...
* styles: contains global styles and fonts
* utils: helper functions 
* services: comunication with backend: authApi.js, projectApi.js
* pages: Auth.jsx, Dashboard.jsx, Profile.jsx, Proposal.jsx
** it is better not to have side effects (useEffect and event function) into each page, and there are just components and these components are located in features.

4. individulize styles in Tailwind: @layer components{ .textField__input @apply{...} }
5. make component for input and its label as a global and useful component. and put it into ui folder.
6. install react-icons and react-otp-input


