import { useState } from "react";
import TextField from "../../ui/TextField";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8">
          <TextField
            label={"نام و نام خانوادگی"}
            name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label={"ایمیل"}
            name={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-center gap-8">
            <div className="flex justify-center gap-x-2">
              <input
                className="cursor-pointer w-4 accent-green-500"
                type="radio"
                name="role"
                id="OWNER"
                value="OWNER"
              />
              <label htmlFor="OWNER">کارفرما</label>
            </div>
            <div className="flex justify-center gap-x-2">
              <input
                className="cursor-pointer w-4 accent-green-500"
                type="radio"
                name="role"
                id="FREELANCER"
                value="FREELANCER"
              />
              <label htmlFor="FREELANCER">فریلنسر</label>
            </div>
          </div>
          <button className="btn btn--primary w-full">تایید</button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
