/// use react-hook-form to make a simple and optimum form

import { useForm } from "react-hook-form";
import HookForm from "../../ui/HookForm";

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
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
