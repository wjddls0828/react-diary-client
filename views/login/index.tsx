import React from 'react';
import Image from 'next/image';
import ThemeButton from 'views/components/theme-button';
//import Logo from 'asset/mood-diary-logo.png';
//import GoogleLogo from 'asset/google-logo.png';
import * as S from './styles';
const LoginPage = () => {
  const googleLogin = () => {
    window.location.href = process.env.API_BASE_URL + '/auth/google';
  };
  return (
    <S.LoginPageContainer>
      <S.LogoContainer>
        <Image src={'/mood-diary-logo.png'} width={'300px'} height={'300px'} />
      </S.LogoContainer>

      <S.LoginButtonContainer>
        <S.GoogleLogoContainer>
          <Image src={'/google-logo.png'} width={'50px'} height={'50px'} />
        </S.GoogleLogoContainer>
        <ThemeButton
          isBrownTheme={true}
          text={'구글 계정으로 로그인'}
          width={'200px'}
          onClick={googleLogin}
        />
      </S.LoginButtonContainer>
    </S.LoginPageContainer>
  );
};

export default LoginPage;
