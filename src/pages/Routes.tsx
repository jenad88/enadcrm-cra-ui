import { createBrowserRouter, RouterProvider, defer } from "react-router-dom"
import LeadLandingPage from "./LeadLandingPage"
import ErrorPage from "./ErrorPage"
import HomePage from "./HomePage"
import App from "../App"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "leads",
        element: <LeadLandingPage />,
      },
    ],
  },
])

const queryClient = new QueryClient()
export function Routes() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
