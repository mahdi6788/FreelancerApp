import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import truncateText from "../../utils/truncateText";
import toLacalDateShort from "../../utils/toLacalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import Table from "../../ui/Table";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import { useState } from "react";

/// use Compound Component

function ProjectTable2() {
  const { isLoading, projects } = useOwnerProjects();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty />;
  // console.log(projects.length)
  // console.log(projects[1].category.title)

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <Table.Row key={project._id}>
            <td>{index + 1}</td>
            <td>{truncateText(project.title, 20)}</td>
            <td>{truncateText(project.category.title, 20)}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLacalDateShort(project.deadline)}</td>
            <td>
              <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                {project.tags.map((tag) => (
                  <span className="badge badge--secondary" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </td>
            <td>{project.freelancer?.name || "-"}</td>
            <td>
              {project.status === "OPEN" ? (
                <span className="badge badge--success">باز</span>
              ) : (
                <span className="badge badge--danger">بسته</span>
              )}
            </td>
            <td>
              <div className="flex items-center gap-x-4">
                <button onClick={() => setIsEditOpen(true)}>
                  <TbPencilMinus className="w-5 h-5 text-primary-900" />
                </button>
                <Modal
                  title={"Edit"}
                  open={isEditOpen}
                  onClose={() => setIsEditOpen(false)}
                >
                  This is a Modal
                </Modal>
                <button onClick={() => setIsRemoveOpen(true)}>
                  <HiOutlineTrash className="w-5 h-5 text-error" />
                </button>
                <Modal
                  title={"Delete"}
                  open={isRemoveOpen}
                  onClose={() => setIsRemoveOpen(false)}
                >
                  Are you sure
                </Modal>
              </div>
            </td>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable2;
