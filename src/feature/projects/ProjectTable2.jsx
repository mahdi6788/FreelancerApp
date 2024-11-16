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
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";

/// use Compound Component

function ProjectTable2() {
  const { isLoading, projects } = useOwnerProjects();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const { removeProject, isDeleting } = useRemoveProject();
  const [addproject, setAddproject] = useState(false);

  if (isLoading) return <Loading />;

  // console.log(projects.length)
  if (!projects.length) return <Empty />;
  // console.log(projects[1].category.title)

  return (
    <>
      <button
        onClick={() => setAddproject(true)}
        className="mb-2 p-1 bg-primary-300 rounded-md "
      >
        ایجاد پروژه جدید
      </button>
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
                    title={`ویرایش ${project.title}`}
                    open={isEditOpen}
                    onClose={() => setIsEditOpen(false)}
                  >
                    <CreateProjectForm projectToEdit={project} onClose={() => setAddproject(false)} />
                  </Modal>
                  <button onClick={() => setIsRemoveOpen(true)}>
                    <HiOutlineTrash className="w-5 h-5 text-error" />
                  </button>
                  <Modal
                    title={`حذف ${project.title}`}
                    open={isRemoveOpen}
                    onClose={() => setIsRemoveOpen(false)}
                  >
                    <ConfirmDelete
                      sourceName={project.title}
                      onClose={() => setIsRemoveOpen(false)}
                      onConfirm={() =>
                        removeProject(project._id, {
                          onSuccess: () => setIsRemoveOpen(false),
                        })
                      }
                      disabled={false}
                    />
                  </Modal>
                  <>
                    <Modal
                      onClose={() => setAddproject(false)}
                      open={addproject}
                      title={"پروژه جدید"}
                    >
                      <CreateProjectForm onClose={() => setAddproject(false)} />
                    </Modal>
                  </>
                </div>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default ProjectTable2;
