import React from "react";
import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect";
import Loading from "../../../ui/Loading";
import useChangeUserStatus from "./useChangeUserStatus";
import { useQueryClient } from "@tanstack/react-query";

function ChangeUsersStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const options = [
    {
      label: "رد شده",
      value: 0,
    },
    {
      label: "در انتظار تایید ",
      value: 1,
    },
    {
      label: " تایید شده",
      value: 2,
    },
  ];

  const {isUpdating, changeUserStatus} = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data }, /// {userId, data:{status:0,1,2}}
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
        onError: (err) => {
          toast.error(err?.message);
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          label="تغییر وضعیت"
          name="status"
          register={register}
          options={options}
          required
        />
        <div className="mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeUsersStatus;
