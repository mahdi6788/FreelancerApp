/// use react-hook-form to make a simple and optimum form

import { useForm } from "react-hook-form";
import HookForm from "../../ui/HookForm";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

/// react-hook-form manages state and submitting so no need to useState
function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditMode = Boolean(editId);

  const {isEditing, editProject} = useEditProject()

  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};

  if (isEditMode) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues }); /// to use previous data

  const [tags, setTags] = useState(prevTags || []);

  const [date, setDate] = useState(new Date(deadline || ""));

  const { categories } = useCategories();
  // console.log(categories)

  const { isCreating, createproject } = useCreateProject();

  const onsubmit = (data) => {
    const newProject = { ...data, deadline: new Date(date).toISOString, tags };
/// switch between edit and create new
    if (isEditMode) {
      editProject(
        {id: editId, newProject}, 
        {onSuccess: () => {
        onClose(),
        reset()
      }})
    } else {
      createproject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  /// use name to determine which field is registered
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onsubmit)}>
      <HookForm
        label={"عنوان پروژه"}
        name={"title"}
        register={register}
        errors={errors}
        required
        validatioSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 5,
            message: "طول عنوان باید بیشتر از 5 کاراکتر باشد.",
          },
        }}
      />
      <HookForm
        label={" توضیحات"}
        name={"description"}
        register={register}
        errors={errors}
        required
        validatioSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 20,
            message: "طول توضیحات باید بیشتر از 20 کاراکتر باشد.",
          },
        }}
      />
      <HookForm
        label={" بودجه"}
        name={"budjet"}
        register={register}
        errors={errors}
        required
        validatioSchema={{
          required: "بودجه ضروری است",
        }}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        options={categories}
        register={register}
        required
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />

      <div className="!mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
