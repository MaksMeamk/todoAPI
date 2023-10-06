import { Input, Button, Modal, Radio } from "antd";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
const AntDHookForm = () => {
  const {
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSubmit = (data) => {
    console.log(JSON.stringify(getValues(), null, 1));
    setIsModalOpen(true);
  };

  return (
    <div className="RHF">
      <Modal
        title="Data User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <span>{JSON.stringify(getValues(), null, 1)}</span>
        <p>Registration is success</p>
      </Modal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "500px", padding: "25px 0 0 0" }}
      >
        <div>
          <label> User name:</label>
          <Controller
            name="userName"
            control={control}
            rules={{ required: "Please input your username!" }}
            render={({ field }) => (
              <Input {...field} placeholder="Please input your username!" />
            )}
          />
          <p style={{ height: "21px", color: "red", margin: "0 0 10px 0" }}>
            {errors.userName?.message}
          </p>
        </div>
        <div>
          <label> Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Please input your email!",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Enter a valid email address",
              },
            }}
            render={({ field }) => (
              <Input {...field} placeholder="Please input your email!" />
            )}
          />
          <p style={{ height: "21px", color: "red", margin: "0 0 10px 0" }}>
            {errors.email?.message}
          </p>
        </div>

        <div>
          <label> Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Please input your password!",
              minLength: { value: 6, message: "Min length - 6 symbols" },
              validate: (value) => {
                if (!/[A-ZА-Я]/.test(value)) {
                  return "The field must contain at least one capital letter";
                }
              },
            }}
            render={({ field: { onChange } }) => (
              <Input.Password
                onChange={onChange}
                placeholder="Please input your password!"
              />
            )}
          />
          <p style={{ height: "21px", color: "red", margin: "0 0 10px 0" }}>
            {errors.password?.message}
          </p>
        </div>
        <div>
          <label> Сonfirm password:</label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Please input your confirm password!",
              validate: (value) => {
                if (!(password === value)) {
                  return "Password fields must be identical";
                }
              },
            }}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Please input your confirm password!"
              />
            )}
          />
          <p style={{ height: "21px", color: "red", margin: "0 0 10px 0" }}>
            {errors.confirmPassword?.message}
          </p>
        </div>

        <div>
          <label> Date of birth:</label>
          <Controller
            name="dateOfBirth"
            control={control}
            rules={{
              required: "Please select your date of birth!",
            }}
            render={({ field }) => (
              <Input
                type={"date"}
                {...field}
                placeholder="Please select your date of birth!"
              />
            )}
          />
          <p style={{ height: "21px", color: "red", margin: "0 0 10px 0" }}>
            {errors.dateOfBirth?.message}
          </p>
        </div>
        <div>
          <label> Gender:</label>
          <Controller
            name="gender"
            control={control}
            rules={{
              required: "Please select your gender",
            }}
            render={({ field }) => (
              <Radio.Group {...field} style={{ padding: "0 0 0 50px" }}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            )}
          />
          <p style={{ height: "21px", color: "red", margin: "0 0 10px 0" }}>
            {errors.gender?.message}
          </p>
        </div>

        <div>
          <label> Phone number:</label>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: "Please input your phonenumber!",
            }}
            render={({ field }) => (
              <Input
                type={"number"}
                {...field}
                placeholder="Please input your phonenumber!"
              />
            )}
          />
          <p style={{ height: "21px", color: "red", margin: "0 0 10px 0" }}>
            {errors.phoneNumber?.message}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" htmlType="submit">
            Registration
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AntDHookForm;
