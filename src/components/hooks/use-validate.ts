import { useEffect, useState } from 'react';

type InputProps = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

const useValidate = ({ ...rest }: InputProps) => {
  const { name, subject, email, message } = { ...rest };

  const [nameValid, setNameValid] = useState<boolean | null>(null);
  const [subjectValid, setSubjectValid] = useState<boolean | null>(null);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [messageValid, setMessageValid] = useState<boolean | null>(null);

  //validation
  useEffect(() => {
    setNameValid(() => (name ? name.trim().length > 3 : null));
    setSubjectValid(() => (subject ? subject.trim().length > 3 : null));
    setEmailValid(() =>
      email ? email.includes('@') && email.includes('.') : null
    );
    setMessageValid(() => (message ? message.trim().length > 3 : null));
  }, [name, subject, email, message]);

  return {
    nameValid,
    subjectValid,
    emailValid,
    messageValid,
  };
};

export default useValidate;
