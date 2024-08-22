import {
  FormStyle,
  InnerBox,
  InputStyled,
  InputStyledDetail,
  InputWrapper,
  LabelInput,
  MainBoxAdm,
  PostBox,
  PostTitle,
  SelectStyled,
  SubmitButton,
} from "./Admin.styled";

import chemistry from "../../assets/svg/chemistry.svg";
import deleteitem from "../../assets/svg/trash.svg";

import {
  LogiImg,
  LogoWrapper,
  LogoLink,
} from "../../components/Header/Header.styled";

const Admin = () => {
  return (
    <MainBoxAdm>
      <InnerBox>
        <LogoWrapper>
          <LogiImg to="/">
            <img src={chemistry} alt="main logo" width={40} height={40} />
          </LogiImg>
          <LogoLink>Chemistry tasks</LogoLink>
        </LogoWrapper>
        <hr />
        <PostBox>
          <PostTitle>Публікація матеріалів для сторінки "Ресурси"</PostTitle>
        </PostBox>

        <FormStyle action="/upload" method="post" encType="multipart/form-data">
          <InputWrapper>
            <LabelInput htmlFor="file-name">Назва файлу</LabelInput>
            <InputStyled
              type="text"
              name="file-name"
              placeholder="Ввести назву"
              id="file-name"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <LabelInput htmlFor="year">Рік видання</LabelInput>
            <InputStyledDetail
              type="text"
              name="year"
              placeholder="Ввести рік"
              id="year"
            />
          </InputWrapper>

          <InputWrapper>
            <LabelInput htmlFor="author-name">Автор видання</LabelInput>
            <InputStyledDetail
              type="text"
              name="author-name"
              placeholder="Автор видання"
              id="author-name"
            />
          </InputWrapper>

          <InputWrapper>
            <LabelInput htmlFor="status">Статус</LabelInput>
            <SelectStyled name="status" id="status">
              <option value="активний"> Опубліковано </option>
              <option value="неактивний"> Чорновик </option>
            </SelectStyled>
          </InputWrapper>

          <InputWrapper>
            <LabelInput htmlFor="file">Завантажити файл на сервер</LabelInput>
            <input type="file" id="file" name="file" required />
          </InputWrapper>

          <SubmitButton type="submit">Опублікувати</SubmitButton>
          <button type="submit">
            <img src={deleteitem} alt="Видалити файл" width={30} height={30} />
          </button>
        </FormStyle>

        <button type="submit">+</button>
      </InnerBox>
    </MainBoxAdm>
  );
};

export default Admin;
