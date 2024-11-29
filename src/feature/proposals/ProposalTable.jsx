import React from "react";
import useProposals from "./useProposals";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";


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


function ProposalTable() {
const {isLoading, proposals} = useProposals()

  if (isLoading) return <Loading />;

  if (!proposals.length) return <Empty resourceName={پروپوزال} />;

  return (
    <>
      {/* Table */}
      <Table>
        <Table.Header>
          <th>#</th>
          <th>درخواست ها</th>
          <th> زمان تحویل</th>
          <th> هزینه</th>
          <th>وضعیت</th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <Table.Row key={proposal._id}>
              <td>{index + 1}</td>
              <td>{truncateText(proposal.description, 15)}</td>
              <td>{toPersianNumbers(proposal.duration)} روز</td>
              <td>{toPersianNumbersWithComma(proposal.price)}</td>
              <td
                className={`badge 
                  ${statusStyle[proposal.status].classname}
                  `}
              >
                {statusStyle[proposal.status].label}
              </td>
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
     
    </>
  );
}

export default ProposalTable;
