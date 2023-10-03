import { Form, Input, Button, Select, Modal } from "antd";
import { ColorFactory } from "antd/es/color-picker/color";
import { ColorFormat } from "antd/es/color-picker/interface";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
const AntDHookForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [registration, setRegistration] = useState({
    userName: "",
    email: "",
    password: "",
    dateBirth: "",
    gender: "",
    phoneNumber: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="RHF">
      <Modal
        title="Data User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <span>{JSON.stringify(registration, null, 1)}</span>
        <p>Registration is success</p>
      </Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> UserName:</label>
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

        <Button type="primary" htmlType="submit">
          Registration
        </Button>
      </form>
    </div>
  );
};

export default AntDHookForm;
