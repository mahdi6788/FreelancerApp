import { useState } from "react";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import toLacalDateShort from "../../utils/toLacalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

function ProposalsTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName="درخواستی یافت نشد" />;

  /// to make the class of status dynamic
  const statusStyle = [
    {
      label: "رد شده",
      classname: "badge--danger",
    },
    {
      label: "در انتظار تایید",
      classname: "badge--secondary",
    },
    {
      label: "تایید شده",
      classname: "badge--success",
    },
  ];
  ///
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <Table.Row key={proposal._id}>
              <td>{index + 1}</td>
              <td>{proposal.user.name}</td>
              <td>{truncateText(proposal.description, 50)}</td>
              <td>{proposal.duration} روز</td>
              <td>{toPersianNumbersWithComma(proposal.price)}</td>
              <td
                className={`badge 
                  ${statusStyle[proposal.status].classname}
                  mt-4`}
              >
                {statusStyle[proposal.status].label}
              </td>
              <td>
                <button
                  className="btn bg-secondary-100"
                  onClick={() => setOpen(true)}
                >
                  تغییر وضعیت
                </button>
                <Modal
                  title="تغییر وضعیت درخواست"
                  onClose={() => setOpen(false)}
                  open={open}
                >
                  <ChangeProposalStatus
                    proposalId={proposal._id}
                    onClose={() => setOpen(false)}
                  />
                </Modal>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalsTable;
