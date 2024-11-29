import React from "react";
import HookForm from "../../ui/HookForm";
import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({projectId, onClose}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { isCreating, createProposal } = useCreateProposal();
  const onSubmit = (data) => {
    // console.log(data)
    //// pass data entered to form and id the project the freelancer wants to give proposal to.
    //// after submitting the proposal, form should be closed
    createProposal({ ...data, projectId }, { onSuccess: () => onClose() });
  };
  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <HookForm
          label={"توضیحات "}
          name={"description"}
          register={register}
          errors={errors}
          required
          validatioSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "طول توضیحات باید بیشتر از 10 کاراکتر باشد.",
            },
          }}
        />
        <HookForm
          label={"قیمت "}
          name={"price"}
          type={"number"}
          register={register}
          errors={errors}
          required
          validatioSchema={{
            required: "قیمت ضروری است",
          }}
        />
        <HookForm
          label={"مدت زمان "}
          name={"duration"}
          type={"number"}
          register={register}
          errors={errors}
          required
          validatioSchema={{
            required: "مدت زمان ضروری است",
          }}
        />
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
    </div>
  );
}

export default CreateProposal;
