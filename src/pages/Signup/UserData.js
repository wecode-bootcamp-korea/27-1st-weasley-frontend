export const USER_DATA = [
  {
    id: 'email',
    name: 'email',
    className: 'formFormat',
    type: 'text',
    placeholder: '이메일',
  },
  {
    id: 'password',
    name: 'password',
    className: 'formFormat',
    type: 'password',
    placeholder: '비밀번호 (6자 이상)',
  },
  {
    id: 'phone',
    name: 'phone',
    className: 'formFormat',
    type: 'text',
    placeholder: '휴대폰 번호 ('-'제외)',
  },
  {
    id: 'birth',
    name: 'birth',
    className: 'forFormat',
    type: 'text',
    placeholder: '예:930422',
  },
  {
    id: 'name',
    name: 'name',
    className: 'forFormat',
    type: 'text',
    placeholder: '이름',
  }
];

USER_DATA.map(function(data){
  return(
    <label for="">
 <input
  id="birth"
  name="birth"
  type="text"
  maxLength="6"
  placeholder="예:930422" />
</label>
  )
})
 <>
//  {user.name} props.data.라벨로 가져올거  
<label for="">생일
 <input
  id="birth"
  name="birth"
  type="text"
  maxLength="6"
  placeholder="예:930422" />
</label>


<label for="phone">
휴대폰 번호
<input
  value=
  type="text"
  id="phone"
  name="phone"
  maxLength="13"
  placeholder="휴대폰 번호 ('-'제외)"
  onChange={handleInput}
/>
</label>



<label for="gender">
성별
<input
  value=
  type="radio"
  id="male"
  name="male"
  placeholder="남자"
  onChange={handleInput}
/>
<input
  value=
  type="radio"
  id="female"
  name="female"
  placeholder="여자"
  onChange={hanldeInput}
/>