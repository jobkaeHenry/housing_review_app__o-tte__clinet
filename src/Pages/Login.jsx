import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userState } from "../Recoil/atoms/atom";


const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  background-color: #f1f2f3;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
    rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

const InputContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Errormsg = styled.p`
  color: var(--alert-red);
  margin: 3px;
  font-size: 13px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 3px;
`;

const Input = styled.input`
  width: 260px;
  height: 35px;
  padding: 0;
`;

const SubmitBtn = styled.input`
  width: 260px;
  height: 35px;
  font-size: 13.6px;
  font-weight: 600;
  color: var(--pure-white);
  background-color: var(--main);
  border: 0;
  border-radius: 3px;
  padding: 0;
  margin-bottom: 5px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
`;

function Login() {
  const [error, setErrMsg] = useState('');
  const [user, setUser] = useRecoilState(userState);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
  } = useForm({ 
    mode: "onChange", });

    useEffect(() => {
      setFocus('email');
    }, [setFocus]);

  const onLogin = async (data) => {
    try {
    axios.post('/auth/token', {
      headers: {
        'Content-Type': 'application/json'
    },
      email: data.email,
      password : data.password,

    }).then((res)=>{
      console.log(res);
    })
  } catch (err) {
    console.log(err);
    if (!err?.response) {
      setErrMsg("??????????????? ????????? ????????????");
    } else if (err.response?.status === 400) {
      setErrMsg("????????? ?????? ??????????????? ??????????????????");
      console.log(error);
    } else if (err.response?.status === 401) {
      setErrMsg("?????????????????? ???????????????");
    } else {
      setErrMsg("Login Failed");
    }
    }
  };

  return (
    <MainContainer>
      <Container>
        <Form onSubmit={handleSubmit(onLogin)}>
          <InputContainer>
            <Label htmlFor={'Email'}>Email</Label>
            <Input
              type={'email'}
              id="Email"
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i,
                maxLength: 50,
              })}
            />
            {errors.email && errors.email.type === 'required' && (
              <Errormsg> ???????????? ??????????????????.</Errormsg>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <Errormsg> ????????? ??????????????? ?????????.</Errormsg>
            )}
            {errors.email && errors.email.type === 'maxLength' && (
              <Errormsg> ?????? ????????? 50??? ???????????? ?????????</Errormsg>
            )}
          </InputContainer>
          <InputContainer>
            <Label htmlFor={'password'}>Password</Label>
            <Input
              type={'password'}
              id="password"
              {...register('password', {
                required: true,
                minLength: 8,
              })}
            />
            {errors.password && errors.password.type === 'required' && (
              <Errormsg> ??????????????? ??????????????????</Errormsg>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <Errormsg> ?????? ????????? 8??? ??????????????? ?????????</Errormsg>
            )}
          </InputContainer>
          <SubmitBtn type="submit" value={'Login'}></SubmitBtn>
          {error && <Errormsg> {error}</Errormsg>}
        </Form>
      </Container>
    </MainContainer>
  );
}

export default Login;