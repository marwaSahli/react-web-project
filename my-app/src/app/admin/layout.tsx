import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside>admin sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
