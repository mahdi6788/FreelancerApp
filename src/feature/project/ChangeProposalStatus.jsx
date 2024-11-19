import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";

function ChangeProposalStatus({ proposalId, onClose }) {
  const { register, handleSubmit } = useForm();
  const options = [
    {
        label: "رد شده",
        value: 0
    },{
        label: "در انتظار تایید ",
        value: 1
    },{
        label: " تایید شده",
        value: 2
    },
  ]

  const {isUpdating, changeProposalStatus} = useChangeProposalStatus()
  const queryClient = useQueryClient()
  const {id: projectId} = useParams()

  const onSubmit = (data) => {
    changeProposalStatus({id: proposalId, data},
        {
            onSuccess: () => {
                onClose()
                queryClient.invalidateQueries({queryKey:["project", projectId]})
            },
            onError: (err) => {
                toast.error(err?.message)
            }
        }
    )
  }

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
            {isUpdating 
            ? <Loading/>
            :
            <button className="btn btn--primary w-full" type="submit">تایید</button>
            }
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
