import useUsers from "../useUsers";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import Loading from "../../../ui/Loading";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import ChangeUsersStatus from "./ChangeUsersStatus";

const usersStatus = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function UsersTable() {
  const [userStatus, setUserStatus] = useState(null);
  const { users, isLoading } = useUsers();
  if (isLoading) return <Loading />;

  if (!users.length) return <Empty resourceName="کاربری" />;

  return (
    <>
      {/* Table */}
      <Table>
        <Table.Header>
          <th>#</th>
          <th>نام</th>
          <th>ایمیل</th>
          <th>موبایل</th>
          <th>نقش</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {users.map((user, index) => (
            <Table.Row key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.role}</td>
              <td className={`badge ${usersStatus[user.status].className}`}>
                {usersStatus[user.status].label}
              </td>
              <td>
                <button onClick={() => setUserStatus(user)}>تغییر وضعیت</button>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Modal
        onClose={() => setUserStatus(null)}
        open={userStatus}
        title={userStatus?.name}
      >
        <ChangeUsersStatus
          userId={userStatus?._id}
          onClose={() => setUserStatus(null)}
        />
      </Modal>
    </>
  );
}

export default UsersTable;
