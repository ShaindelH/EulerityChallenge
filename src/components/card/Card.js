import styled from "styled-components";

const CardImage = styled.img`
  width: 100%;
  height: 350px;
    object-fit:cover;
    object-position:relative;
  `;

export const PetCardContainer = styled.div`
  padding: 0px 12px 18px;
  background-color: #37474f;
  width: 400px;
  height: 520px;
  margin: 0px 5px 2px 5px;
  text-align: center;
  `
;

 export const ProfileCardContainer = styled.div`
  padding: 30px 12px 18px;
  background-color: #37474f;
  width: 20%;
  height: 80%;
  margin:auto;
  margin-top: 20px;
  align-content: center;
  text-align: center;
  `;

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  margin: 10px;
`
const Date = styled.div`
color: #fff;
  font-weight: 300;
  margin: 10px;
 
`
const Description = styled.p`
  color: #fff;
  font-weight: 300;
  margin: 10px;
`


export const Button = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: #37474f;
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  `


export const Card = ({
    title,
    date,
    description,
    image,
  }) => (
    <p style={{marginBottom: 0}}>
    <CardImage src={image}/>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Description>{description}</Description>
      </p>
  )


export const Input = styled.input`
font-size: 18px;
height: 40px;
display: flex;
margin:10px auto;
align-items: center;
justify-content: center;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
 
width: 50%;
margin: "5rem";
border: 3px solid  #37474f;
border-radius: 5px;
color: #37474f;
transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

&:focus,
&:active {
  outline: none;
}
&::placeholder {
  color: #37474f;
}
`;