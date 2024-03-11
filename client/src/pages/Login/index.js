import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { Link } from "react-router-dom";
import Divider from "../../components/Divider";
import { LoginUser } from "../../apicalls/users";
import { useDispatch, useSelector } from "react-redux";
import { SetButtonLoading } from "../../redux/loadersSlice";
import { getAntdFormInputRules } from "../../utils/helpers";

function Login() {
  const { buttonLoading } = useSelector((state) => state.loaders);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(SetButtonLoading(true));
      const response = await LoginUser(values);
      dispatch(SetButtonLoading(false));
      if (response.success) {
        localStorage.setItem("token", response.data);
        message.success(response.message);
        window.location.href = "/";
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetButtonLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center div-col py-4 px-4 rounded-lg">
        <div className="w-[420px]">
          <h1 className="text-2xl text-gray-700"><center className="">Log In</center></h1>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={getAntdFormInputRules}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={getAntdFormInputRules}
            >
              <Input type="password" />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              block
              loading={buttonLoading}
            >
              {buttonLoading ? "Loading" : "Login"}
            </Button>

            <div className="flex justify-center mt-5">
              <span>
                Don't have an account? <Link to="/register">Register</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
