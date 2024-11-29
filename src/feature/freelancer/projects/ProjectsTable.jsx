import React, { useState } from "react";
import useProjects from "../../../hooks/useProjects";
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import truncateText from "../../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import toLacalDateShort from "../../../utils/toLacalDateShort";
import Table from "../../../ui/Table";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSE: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectsTable() {
  const { isLoading, projects } = useProjects();
  /// instead of using open and setOpen, use the below.
  /// when click on the button, it gets the project and wherever into modal we can use it also when it has project that means it is true otherwise false so it is useful for close and open the modal as well.
  const [proposedProject, setProposedProject] = useState(null);
  // const [open, setOpen] = useState(false);

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty  resourceName= "پروژه ای یافت نشد" />;

  return (
    <>
      {/* Table */}
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <Table.Row key={project._id}>
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 20)}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{toLacalDateShort(project.deadline)}</td>
              <td
                className={`badge ${
                  projectStatus[project.status].className
                }`}
              >
                {projectStatus[project.status].label}
              </td>
              <td>
                <button onClick={() => setProposedProject(project)}>
                  <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
                </button>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Modal
        open={proposedProject}
        onClose={() => setProposedProject(null)}
        title={`درخواست انجام پروژه ${proposedProject?.title}`}
      >
        <CreateProposal
          onClose={() => setProposedProject(null)}
          projectId={proposedProject?._id}
        />
      </Modal>
    </>
  );
}

export default ProjectsTable;
