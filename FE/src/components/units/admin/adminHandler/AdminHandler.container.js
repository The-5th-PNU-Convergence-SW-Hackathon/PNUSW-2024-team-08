import { useRouter } from "next/router";
import AdminHandlerUI from "./AdminHandler.presenter";

export default function AdminHandler() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  const paths = {
    dashboard: "/admin/dashboard",
    member_management:"/admin/member_management",
    adopt_request:"/admin/adopt_request",
    inquiries: "/admin/inquiries",
    reports:"/admin/reports"
  }

  const navigateTo = (path) => () => router.push(path);

  return(
    <AdminHandlerUI 
      isActive={isActive}
      navigateTo={navigateTo}
      paths={paths}
    />
  )
}