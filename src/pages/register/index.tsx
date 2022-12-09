import { NextPage } from "next";
import { RegisterForm } from "../../components/forms/register/RegisterForm";

export const RegisterPage: NextPage = () => {
	return (
		<div className="pageFlex">
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
