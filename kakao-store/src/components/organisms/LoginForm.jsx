import Button from "../atoms/Button";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";

const LoginForm = () => {
	const dispatch = useDispatch();

	const { value, handleOnChange } = useInput({
		email: "",
		password: "",
	})

	return (
		<Container>
			<Title>로그인</Title>
			<InputGroup id="email" type="email" name="email" placeholder="이메일(아이디)" label="이메일" value={value.email}
				onChange={handleOnChange}/>
			<InputGroup id="password" type="password" name="password" placeholder="비밀번호" label="비밀번호" value={value.password}
				onChange={handleOnChange}/>
			<Button
					onClick={() => {
						dispatch(
							loginRequest({
								email: value.email,
								password: value.password,
							})
						)
				}}
			>로그인</Button>
		</Container>
	);
}

export default LoginForm;