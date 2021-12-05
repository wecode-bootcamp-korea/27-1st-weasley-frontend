const USER_DATA = [
  {
    id: '1',
    name: 'email',
    className: 'formFormat',
    type: 'text',
    maxLength: '500',
    placeholder: '이메일',
    defaultRequired: '이메일은 필수항목입니다.',
  },
  {
    id: '2',
    name: 'password',
    className: 'formFormat',
    type: 'password',
    maxLength: '45',
    placeholder: '비밀번호 (6자 이상)',
  },
  {
    id: '3',
    name: 'phone',
    className: 'formFormat',
    type: 'text',
    maxLength: '13',
    placeholder: '휴대폰 번호 (-제외)',
  },
  {
    id: '4',
    name: 'birth_of_birth',
    className: 'forFormat',
    type: 'text',
    maxLength: '10',
    placeholder: '예:1993-04-22',
  },
  {
    id: '5',
    name: 'name',
    className: 'forFormat',
    type: 'text',
    maxLength: '15',
    placeholder: '이름',
  },
];

export default USER_DATA;
