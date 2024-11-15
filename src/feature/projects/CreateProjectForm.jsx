/// use react-hook-form to make a simple and optimum form

import { useForm } from "react-hook-form";
import HookForm from "../../ui/HookForm";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";

/// react-hook-form manages state and submitting so no need to useState
function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  const [tags, setTags] = useState([]);

  const [date, setDate] = useState(new Date())

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
        options={[]}
        register={register}
        required
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین"/>

      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
