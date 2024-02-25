import {createContext} from "react";
const DataContext = createContext ({});

export const DataProvider = ({children}) => {
    const data = [
        {
            "name": "Sales Overview",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "name": "User Analytics",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "name": "Product Insights",
            "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            "name": "Financial Reports",
            "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "name": "Customer Engagement",
            "description": "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
        },
        {
            "name": "Employee Performance",
            "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."
        },
        {
            "name": "Marketing Campaigns",
            "description": "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        },
        {
            "name": "Project Management",
            "description": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit."
        },
        {
            "name": "Customer Support",
            "description": "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
        },
    ]   
  return (
    <DataContext.Provider value={data}>
         {children}
    </DataContext.Provider>

  )
}

export default DataContext
