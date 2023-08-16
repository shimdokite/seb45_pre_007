import React from 'react';
import { styled } from 'styled-components';
import OAuthSign from '../components/Sign/OAuthSign.jsx';
// PR 테스트 및 코드수정
const SignLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 15px;
`;

const SignRow = styled.div`
  display: flex;
`;

const SignLeftBox = styled.div`
  margin-right: 48px;
  margin-bottom: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignRightBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SignflexBox = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const SignIconBox = styled.div`
  box-sizing: border-box;
  padding-right: 10px;
`;

const SignH1 = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 27px;
  color: #232629;
  margin-bottom: 32px;
`;

const SignParagraph = styled.p`
  font-size: 12px;
  margin: 4px 0;
`;

const SignLabel = styled.label`
  font-size: 12px;
`;
const SignUpForm = styled.form`
  display: flex; /* Flex 형태로 변경 */
  flex-direction: column; /* 세로 방향으로 아이템 배치 */
  align-items: center; /* 가운데 정렬 */
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SignLayout>
      <SignRow>
        <SignLeftBox>
          <SignH1>Join the Stack Overflow community</SignH1>
          <SignflexBox>
            <SignIconBox>
              <svg
                width="26"
                height="26"
                className="svg-icon mtn2"
                fill="hsl(206,100%,52%)"
              >
                <path
                  opacity=".5"
                  d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"
                ></path>
                <path d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"></path>
              </svg>
            </SignIconBox>
            <div>Get unstuck — ask a question</div>
          </SignflexBox>
          <SignflexBox>
            <SignIconBox>
              <svg
                width="26"
                height="26"
                className="svg-icon mtn2"
                fill="hsl(206,100%,52%)"
              >
                <path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"></path>
                <path
                  opacity=".5"
                  d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
                ></path>
              </svg>
            </SignIconBox>
            <div>Unlock new privileges like voting and commenting</div>
          </SignflexBox>
          <SignflexBox>
            <SignIconBox>
              <svg
                width="26"
                height="26"
                className="svg-icon mtn2"
                fill="hsl(206,100%,52%)"
              >
                <path d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"></path>
                <path
                  opacity=".5"
                  d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
                ></path>
              </svg>
            </SignIconBox>
            <div>
              Save your favorite questions, answers, watch tags, and <br />
              more
            </div>
          </SignflexBox>
          <SignflexBox>
            <SignIconBox>
              <svg
                width="26"
                height="26"
                className="svg-icon mtn2"
                fill="hsl(206,100%,52%)"
              >
                <path d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"></path>
              </svg>
            </SignIconBox>
            <div>Earn reputation and badges</div>
          </SignflexBox>
          <div>
            Collaborate and share knowledge with a private group for FREE.
            <br />
            <a href="/">
              Get Stack Overflow for Teams free for up to 50 users.
            </a>
          </div>
        </SignLeftBox>
        <SignRightBox>
          <OAuthSign />
          <SignUpForm onSubmit={handleSubmit}>
            <span>Display name</span>
            <InputField type="text" placeholder="Username" />
            <span>Email</span>
            <InputField type="email" placeholder="Email" />
            <span>Password</span>
            <InputField type="password" placeholder="Password" />
            <SignParagraph>
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </SignParagraph>
            <SignflexBox>
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <SignLabel
                  htmlFor="opt-in"
                  className="s-label fw-normal fs-caption px0"
                >
                  Opt-in to receive occasional product updates, user research
                  invitations, company announcements, and digests.
                </SignLabel>
              </div>
              <div>
                <svg
                  aria-hidden="true"
                  className="svg-icon iconHelpSm"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <path d="M7 1C3.74 1 1 3.77 1 7c0 3.26 2.77 6 6 6 3.27 0 6-2.73 6-6s-2.73-6-6-6Zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08Zm.73-3.07-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 0 1 7.7 6.07c.15-.1.21-.21.3-.33.18-.2.28-.47.28-.74.01-.67-.53-1.14-1.18-1.14-.9 0-1.18.7-1.18 1.46H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01Z"></path>
                </svg>
              </div>
            </SignflexBox>
            <SubmitButton type="submit">Sign Up</SubmitButton>
            <SignParagraph>
              By clicking “Sign up”, you agree to our terms of service and
              acknowledge that you have read and understand our privacy policy
              and code of conduct.
            </SignParagraph>
          </SignUpForm>
        </SignRightBox>
      </SignRow>
    </SignLayout>
  );
};

export default SignUp;